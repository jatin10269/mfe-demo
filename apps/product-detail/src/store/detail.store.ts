import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { Product } from '../model/product';

interface ProductState {
  product?: Product;
  loading: boolean;
  loaded: boolean;
  error?: string;
}

@Injectable()
export class ProductStore extends ComponentStore<ProductState> {
  private readonly apiUrl = 'https://mfe-demo-services.onrender.com/products'; // Your API endpoint

  constructor(private http: HttpClient) {
    super({ loading: false, loaded: false, error: '' });
  }

  readonly product$ = this.select(state => state.product);
  readonly loading$ = this.select(state => state.loading);
  readonly loaded$ = this.select(state => state.loaded);
  readonly error$ = this.select(state => state.error);

  readonly fetchProduct = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      tap(() => this.patchState({ loading: true, loaded: false, error: '' })),
      switchMap(id =>
        this.http.get<{data:Product}>(`${this.apiUrl}/${id}/details`).pipe(
          tap(response => this.patchState({ product:response.data, loading: false, loaded: true })),
          catchError(error => {
            this.patchState({ loading: false, loaded: false, error: error.message });
            return of(undefined); // Return empty observable in case of error
          })
        )
      )
    );
  });
}
