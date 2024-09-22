import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState, CART_FEATURE_KEY } from "../reducers/cart.reducer";

export const SelectCartFeature = createFeatureSelector<CartState>(CART_FEATURE_KEY);

export const SelectCartList = createSelector(
  SelectCartFeature,
  (state) => {
    return state.products
  }
)
