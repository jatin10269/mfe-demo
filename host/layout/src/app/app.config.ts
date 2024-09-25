import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { CART_FEATURE_KEY, productCartFeature, reducer } from 'libs/data/ngrx-cart/src';
import { appRoutes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withHashLocation()),
    provideAnimations(),
    provideHttpClient(),
    provideStore({
      [productCartFeature.name]: productCartFeature.reducer
    }),
    // provideState({
    //   name: productCartFeature.name,
    //   reducer: productCartFeature.reducer
    // }),
    provideStoreDevtools({
      maxAge: 25
    })
  ],
};
