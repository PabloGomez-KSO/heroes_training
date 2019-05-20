import * as heroActions from '../actions';
import * as reducer from './hero.reducer';
import { Hero } from '../../model/hero.model';


const testHeroes: Hero[] = [];

testHeroes[0] = new Hero(1, "MegaTron", 6.4, "test.jpg", "War Pro");
testHeroes[1] = new Hero(2, "Bumbublee", 7.0, "test.jpg", "Destroy Optimus Prime");

const heroUpdate: Hero = new Hero(2, "Bumbublee Rocks", 15.0, "test.jpg", "Save Optimus");


const testHeroesUpdated: Hero[] = [];

testHeroesUpdated[0] = new Hero(1, "MegaTron", 6.4, "test.jpg", "War Pro");
testHeroesUpdated[1] = new Hero(2, "Bumbublee Rocks", 15.0, "test.jpg", "Save Optimus");

describe('[Heroes] Load Heroes Action', () => {

    it('Should call the action of Load Heroes', () => {

        const testAction = new heroActions.LoadHeroes();

        const fakeInitialState: reducer.HeroesState = {
            heroes: [],
            loaded: false,
            loading: false,
            error: null
        }

        const result = reducer.heroesReducer(fakeInitialState, testAction);

        const expectedResult: reducer.HeroesState = {
            heroes: [],
            loaded: false,
            loading: true,
            error: null
        }

        expect(result).toEqual(expectedResult);
    });
});



describe('[Heroes] Load Heroes Success Action', () => {

    it('Should retrieve the information from the API when calling Load Success Action', () => {

        const testAction = new heroActions.LoadHeroesSuccess(testHeroes);

        const fakeInitialState: reducer.HeroesState = {
            heroes: [],
            loaded: false,
            loading: true,
            error: null
        }

        const result = reducer.heroesReducer(fakeInitialState, testAction);

        const expectedResult: reducer.HeroesState = {
            heroes: testHeroes,
            loaded: true,
            loading: false,
            error: null
        }
        expect(result).toEqual(expectedResult);

    });
});



describe('[Heroes] Update Heroes Action', () => {

    it('Should update information from array of heroes in store', () => {

        const fakeInitialState: reducer.HeroesState = {
            heroes: [...testHeroes],
            loaded: true,
            loading: false,
            error: null
        };

        const updateTestAction = new heroActions.UpdateHeroes(heroUpdate);

        const updateResult =  reducer.heroesReducer(fakeInitialState, updateTestAction);

        const expectedResult: reducer.HeroesState = {
            heroes: [...testHeroesUpdated],
            loaded: true,
            loading: false,
            error: null
        };

        expect(updateResult).toEqual(expectedResult);

    });
});
