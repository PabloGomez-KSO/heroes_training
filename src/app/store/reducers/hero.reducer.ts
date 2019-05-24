import * as actions from '../actions';
import { Hero } from '../../model/hero.model';
export interface HeroesState {
  heroes: Hero[];
  loading: boolean;
  error: any;
}

const heroesInitialState: HeroesState = {
  heroes: null,
  loading: false,
  error: null
}

export function heroesReducer(state = heroesInitialState, action: actions.heroActions): HeroesState {

  switch (action.type) {
    case actions.LOAD_HEROES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.LOAD_HEROES_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: [...action.heroes]
      };
    case actions.LOAD_HEROES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actions.UPDATE_HEROES:

      const stateUpdated = state.heroes.map(hero => {
        if (hero._id === action.hero._id) {
          hero = action.hero;
          return hero;
        }
        return hero;
      })

      return {
        ...state,
        error: null,
        heroes: [...stateUpdated]
      }
    default:
      return state;
  }
}
