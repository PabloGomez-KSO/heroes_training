import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';


export const getHeroesState = createFeatureSelector<AppState>('heroes');


export const getHeroById = (heroId: number) => createSelector(
  getHeroesState,
  (state) => {
    return state.heroesState.heroes.find(hero => heroId === hero._id);
  }
);
