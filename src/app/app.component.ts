import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer'

import { HeroesComponent } from './heroes';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar')
  ,HeroesComponent
  ]
})
export class AppComponent {
  title = 'All Heros from Service/RxJS!';
}
