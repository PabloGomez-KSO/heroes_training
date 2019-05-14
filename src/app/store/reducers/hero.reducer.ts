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

  switch( action.type){
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
           loaded: true,
           heroes: [...action.heroes ]
         };
    case actions.LOAD_HEROES_FAIL:
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payload
        };
    default:
         return state;
  }
}
