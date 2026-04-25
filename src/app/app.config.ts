import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { myInterceptorInterceptor } from '../interceptors/my-interceptor-interceptor';
import { userReducer } from '../store/user.reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userEffect } from '../store/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({ user: userReducer }),
    provideEffects([{userEffect}]),
    provideHttpClient(
      withInterceptors([myInterceptorInterceptor])
    )
  ]
};
