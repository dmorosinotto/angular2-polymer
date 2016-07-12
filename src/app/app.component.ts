import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RoutesRecognized } from '@angular/router';
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
    PolymerElement('app-toolbar'),
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {
  title = '';
  isInChildView = false;
  
  constructor(private router: Router) {
    this.router.events.subscribe(r => {
      // console.log('ROUTE EVENT', r);
      if (r instanceof RoutesRecognized) {
        this.isInChildView = (r.urlAfterRedirects !== '/list'); // !r.state.firstChild(r.state.root).data['root'];
        this.title = r.state.firstChild(r.state.root).data['title'];
      }
    });
  }

  goBack() {
    this.router.navigate(['/list']);
  }
}
