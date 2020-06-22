import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Obvious' },
      { id: 12, name: 'Super Slav' },
      { id: 13, name: 'Western Spy' },
      { id: 14, name: 'Overpowered Antihero' },
      { id: 15, name: 'Magnetite' },
      { id: 16, name: 'Pirata que estica' },
      { id: 17, name: 'DynaMaaaate' },
      { id: 18, name: 'Mr. PhD. Dr. Dr. Doctor' },
      { id: 19, name: 'Sir. Tea Cup' },
      { id: 20, name: 'Torn Ado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
