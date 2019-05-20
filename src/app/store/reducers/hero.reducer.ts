import * as actions from '../actions';
import { Hero } from '../../model/hero.model';


export interface HeroesState {
  heroes: Hero[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const heroesInitialState: HeroesState = {
  heroes: [],
  loaded: false,
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

      let heroesArray: Hero[] = [];

      for (let i = 0; i < action.heroes.length; i++) {
        heroesArray[i] = new Hero(i + 1,
          action.heroes[i]._name,
          action.heroes[i]._height,
          action.heroes[i]._picture,
          action.heroes[i]._nickname
        );
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        heroes: [...heroesArray]
      };
    case actions.LOAD_HEROES_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };

    case actions.UPDATE_HEROES:

      let heroesUpdated: Hero[] = [];
      let index = 0;

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
