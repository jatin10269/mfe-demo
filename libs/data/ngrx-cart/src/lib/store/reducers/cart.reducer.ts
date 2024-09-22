import { createFeature, createReducer, on } from '@ngrx/store';
import { CartActions } from '../actions';

export const CART_FEATURE_KEY = 'demo-cart-store';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export interface CartState {
  products: Product[];
  loading: boolean;
}

export const INITIAL_CART_STATE: CartState = {
  products: [],
  loading: false,
};

export const reducer = createReducer(
  INITIAL_CART_STATE,
  on(CartActions.addToCart, (state, action) => {
    console.log('inside shared reducer to add product', action.product);
    console.log(state.products.findIndex((p) => action.product.id));
    if (state.products.findIndex((p) => p.id === action.product.id) >= 0) {
      console.log('product is already present in list', state.products);
      return { ...state };
    }
    const products: Product[] = JSON.parse(JSON.stringify(state.products));
    products.push(action.product);
    console.log('new product added in the shared state new product list is ', products)
    return {
      ...state,
      products: [
        ...products
      ]
    };
  })
);

export const productCartFeature = createFeature({
  name: CART_FEATURE_KEY,
  reducer,
});
