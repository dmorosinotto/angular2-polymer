import { RouterConfig, provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HeroesComponent } from './heroes';
import { HeroDetailComponent } from './hero-detail';

export const routes: RouterConfig = [
    { path: 'list', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
  , { provide: LocationStrategy, useClass: HashLocationStrategy }
];
