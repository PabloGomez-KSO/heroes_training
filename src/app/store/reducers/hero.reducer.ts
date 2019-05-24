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

      let heroesUpdated: Hero[] = [];
      let index = 0;


      state.heroes.map(hero => {
        
      })

      state.heroes.forEach(hero => {
        if (hero._id === action.hero._id) {
          heroesUpdated[index] = action.hero;
        }
        else {
          heroesUpdated[index] = hero;
        }
        index++;
      });

      return {
        ...state,
        error: null,
        heroes: [...heroesUpdated]
      }
    default:
      return state;
  }
}
