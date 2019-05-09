import * as heroActions from '../actions/hero.actions';
import { Hero } from '../model/hero.model';

const initialState: Hero[] = [];


export function todoReducer(state = initialState, action: heroActions.addHeroesAction): Hero[] {

  switch (action.type) {
    case heroActions.ADD_HEROES:

      let heroesArray: Hero[] = [];

      for (let i = 0; i < action.heroes.length; i++) {
         const hero = new Hero(action.heroes[i]._name,
                               action.heroes[i]._height,
                               action.heroes[i]._picture,
                               action.heroes[i]._name);

         heroesArray[i] = hero;
      }
      return [...state, ...heroesArray];;

    default:
      return state;
  }
}
