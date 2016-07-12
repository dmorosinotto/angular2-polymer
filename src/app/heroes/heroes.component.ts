import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Hero, HeroService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  template: `
    <vaadin-grid [items]="heroes" (selected-items-changed)="gotoDetail($event)">
      <table>
        <colgroup>
          <col name="id">
          <col name="name">
          <col name="birthday">
        </colgroup>
      </table>
    </vaadin-grid>
  `,
  styles: [`
    vaadin-grid {
      height: 100%;
    }
  `],
  directives: [ PolymerElement('vaadin-grid') ],
  providers: [ HeroService ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private svc: HeroService, private router: Router) {
    // this.heroes = this.svc.getHeroes();
  }

  ngOnInit() {
    this.svc.getHeroes().subscribe( data => this.heroes = data );
  }

  gotoDetail(event: any) {
    let selectedIndex = event.target.selection.selected()[0];
    if (selectedIndex) {
      const id = this.heroes[selectedIndex].id;
      this.router.navigate(['/detail', id ])
    }
  }
}
