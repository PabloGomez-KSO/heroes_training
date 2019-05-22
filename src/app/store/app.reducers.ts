import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    heroesState: reducers.HeroesState;
}

//Combination of all reducers.
export const appReducers: ActionReducerMap<AppState> = {
    heroesState: reducers.heroesReducer,
};
