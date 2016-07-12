import { RouterConfig, provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HeroesComponent } from './heroes';
import { HeroDetailComponent } from './hero-detail';

export const routes: RouterConfig = [
    { path: 'list', component: HeroesComponent , data: { title: 'Heroes List', root: true } },
    { path: 'detail/:id', component: HeroDetailComponent, data: { title: 'Hero detail' } },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
  , { provide: LocationStrategy, useClass: HashLocationStrategy }
];
