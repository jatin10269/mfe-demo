import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { Product } from '../app/model/product';

// Define the shape of your store's state
interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}


@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {

  // Initial state
  constructor(private http: HttpClient) {
    super({ products: [], loading: false, error: null });
  }

  // Selectors (to select pieces of state)
  readonly products$ = this.select((state) => state.products);
  readonly loading$ = this.select((state) => state.loading);
  readonly error$ = this.select((state) => state.error);

  // Updaters (for modifying state)
  readonly setProducts = this.updater((state, products: Product[]) => ({
    ...state,
    products,
    loading: false,
    error: null,
  }));

  readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));

  readonly setError = this.updater((state, error: string) => ({
    ...state,
    error,
    loading: false,
  }));

  // Effect to load products from the API
  readonly loadProducts = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      // Set loading to true when effect starts
      tap(() => this.setLoading(true)),

      // Make the API call
      switchMap(() =>
        this.http.get<{products:Product[]}>('https://mfe-demo-services.onrender.com/products/search').pipe(
          // On success, update the products in the store
          tap({
            next: (resp) => this.setProducts(resp.products),
            error: (err) => this.setError(err.message || 'Unknown error'),
          })
        )
      )
    )
  );
}
