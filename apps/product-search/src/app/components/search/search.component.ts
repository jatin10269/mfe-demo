import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStore } from '@ngrx/component-store';
import { Product } from '../../model/product';
import { ProductsStore } from 'apps/product-search/src/store/search.store';
import { OrderListModule } from 'primeng/orderlist';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, OrderListModule, DragDropModule, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [ComponentStore, ProductsStore, HttpClient],
})
export class SearchComponent {
  constructor(public productsStore: ProductsStore) {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((cars) => (this.products = cars));
    // Trigger the loadProducts effect when the component initializes
    this.productsStore.loadProducts();
  }

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }
}
