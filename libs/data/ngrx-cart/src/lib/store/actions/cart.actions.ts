import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../reducers/cart.reducer';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add to cart': props<{ product: Product }>(),
  },
});
