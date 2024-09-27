import { computed, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { Product } from '../api/product';
import { ProductService } from '../service/product.service';

type ProductState = {
  products: Product[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: ProductState = {
  products: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const ProductStore = signalStore(
  withState(initialState),
  withComputed(({ products, filter }) => ({
    productsCount: computed(() => products().length),
    sortedProducts: computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return products().sort((a, b) => {
        // Check if 'a' or 'b' is undefined or if 'name' is missing/undefined
        if (!a?.name) return 1;  // Move 'a' to the bottom if 'a' or 'a.name' is undefined
        if (!b?.name) return -1; // Move 'b' to the bottom if 'b' or 'b.name' is undefined

        // Compare names if both 'a' and 'b' are defined
        return direction * a.name.localeCompare(b.name);
      });
    }),
  })),
  withMethods((store, productService = inject(ProductService)) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    },
    loadProducts: rxMethod<void>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return productService.getProductsV2().pipe(
            tapResponse({
              next: (products) => patchState(store, { products:products.data }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
