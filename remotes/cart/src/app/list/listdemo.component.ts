import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

import { Store } from '@ngrx/store';
import { CartActions, Product, SelectCartList } from 'libs/data/ngrx-cart/src';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './listdemo.component.html',
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    PickListModule,
    OrderListModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
  ],
})
export class ListDemoComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    // this.productService.getProducts().then((data) => (this.products = data));
    this.products$ = this.store.select(SelectCartList);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }

  addToCartStore(product: Product) {
    console.log('Add product to car', product);
    this.store.dispatch(CartActions.addToCart(<any>{product}));
  }
}
