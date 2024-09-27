import { Component, inject, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

import { Product } from '../api/product';
import { ProductService } from '../service/product.service';
import { Store } from '@ngrx/store';
import { CartActions } from 'libs/data/ngrx-cart/src';
import { ToastModule } from 'primeng/toast';

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
    ToastModule
  ],
  providers: [ProductService, MessageService,Store],
})
export class ListDemoComponent implements OnInit {
  products: Product[] = [];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  store: Store = inject(Store);

  constructor(private productService: ProductService, private messageService: MessageService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));

    this.sourceCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' },
    ];

    this.targetCities = [];

    this.orderCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' },
    ];

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
    this.messageService.add(
        { severity: 'success', summary: 'Success', detail: 'Product Added to the cart' }
    )
  }
}
