import { Hero } from '../model/hero.model';
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {

    heroes: reducers.HeroesState;

}

//Combination of all reducers.

export const appReducers: ActionReducerMap<AppState> = {
    heroes: reducers.heroesReducer
};
