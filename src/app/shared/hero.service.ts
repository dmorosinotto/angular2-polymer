import { Injectable } from '@angular/core';

import { Hero } from './hero.ts';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/of';

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

  getHeroes() {
    // return HEROS;
     
    return Observable.create(obs => {
      obs.next(HEROS);
      obs.complete();
    });
    
    // return Observable.of(HEROS);
    // return Observable.from([HEROS]);   
  }

}
