import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [ 
    PolymerElement('paper-input'),
    PolymerElement('vaadin-date-picker') 
  ],
  providers: [ HeroService ]
})
export class HeroDetailComponent implements OnInit {
  id: number;
  hero: Hero;
  constructor(private svc: HeroService, private route: ActivatedRoute) {
    this.id = parseInt(route.snapshot.params['id']);
  }

  ngOnInit() {
    this.svc.getHero(this.id).subscribe( data => this.hero = data );
  }

}
