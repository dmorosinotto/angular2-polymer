import { Injectable } from '@angular/core';

import { Hero } from './hero.ts';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const HEROS: Hero[] = [
  { "id": 11,  "name": "Mr. Nice",   "birthday": "1980-01-11" },
  { "id": 12,  "name": "Narco",      "birthday": "1980-01-12" },
  { "id": 13,  "name": "Bombasto",   "birthday": "1980-01-13" },
  { "id": 14,  "name": "Celeritas",  "birthday": "1980-01-14" },
  { "id": 15,  "name": "Magneta",    "birthday": "1980-01-15" },
  { "id": 16,  "name": "RubberMan",  "birthday": "1980-01-16" },
  { "id": 17,  "name": "Dynama",     "birthday": "1980-01-17" },
  { "id": 18,  "name": "Dr IQ",      "birthday": "1980-01-18" },
  { "id": 19,  "name": "Magma",      "birthday": "1980-01-19" },
  { "id": 20,  "name": "Tornado",    "birthday": "1980-01-20" }
]; 


@Injectable()
export class HeroService {

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    // return HEROS;
     
    return Observable.of(HEROS);
    // return Observable.from([HEROS]);   
  }

  getHero(id: number): Observable<Hero> {
    /*
    return Observable.create(obs => {
      let found = HEROS.filter(h => h.id === id);
      if (found && found.length>0) {
        obs.next(found[0]);
        obs.complete(); 
      } else {
        obs.error(null); //NOT FOUND
      }
    });
    */
    return this.getHeroes().map(  heros => heros.find(h => h.id === id)  );
  }

}
