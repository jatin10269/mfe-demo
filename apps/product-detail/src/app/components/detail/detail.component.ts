import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Product } from 'apps/product-detail/src/model/product';
import { ProductStore } from 'apps/product-detail/src/store/detail.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  providers: [ComponentStore, ProductStore, HttpClient],
})
export class DetailComponent {
  product$: Observable<Product | undefined>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<string | undefined>;

  constructor(private productStore: ProductStore) {
    this.product$ = this.productStore.product$;
    this.loading$ = this.productStore.loading$;
    this.loaded$ = this.productStore.loaded$;
    this.error$ = this.productStore.error$;
  }

  ngOnInit() {
    // Replace with the actual product ID
    const productId = 1000;
    this.productStore.fetchProduct(productId);
  }
}
