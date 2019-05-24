import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { HeroesState } from '../reducers/hero.reducer';
import { Hero } from '../../model/hero.model';

export const getHeroesState = (state: AppState) => state.heroesState;

export const getHeroById = (heroId: number) => createSelector(
  getHeroesState,
  (state: HeroesState) => {
     let hero = null;
    if (state.heroes) {
     hero = state.heroes.find((hero: Hero) => hero._id === heroId);
    }
    return (hero) ? hero : null;
  }
);

export const getHeroes = () => createSelector(
  getHeroesState,
  (state: HeroesState) => {
    return state.heroes;
  }
);

