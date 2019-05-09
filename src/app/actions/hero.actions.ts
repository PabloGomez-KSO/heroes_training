import { Action } from '@ngrx/store';
import { Hero } from '../model/hero.model';

export const ADD_HEROES = '[HEROES] Add heroes';

export class addHeroesAction implements Action {

  readonly type = ADD_HEROES;
  constructor(public heroes: Hero[]) {  }

}

export type Acciones = addHeroesAction;
