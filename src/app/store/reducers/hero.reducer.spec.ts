import * as heroActions from '../actions';
import * as reducer from './hero.reducer';
import { Hero } from '../../model/hero.model';


const testHeroes: Hero[] = [
    {
        _id: 1,
        _name: "Machine War",
        _height: 6.4,
        _picture: "test.jpg",
        _nickname: "War Pro"
    },
    {
        _id: 2,
        _name: "Hulk",
        _height: 7.0,
        _picture: "test.jpg",
        _nickname: "Monster"
    }
];



const heroUpdate: Hero =
    {
        _id: 2,
        _name: "Hulk The Pro Hero",
        _height: 7.0,
        _picture: "test.jpg",
        _nickname: "BIG MONSTER"
    };

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

        expect(result.error).toEqual(null);
        expect(result.heroes.length).toBe(2);
        expect(result.loaded).toBe(true);
        expect(result.loading).toBe(false);

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

        expect(updateResult.error).toEqual(null);
        expect(updateResult.heroes.length).toBe(2);
        expect(updateResult.loaded).toBe(true);
        expect(updateResult.loading).toBe(false);
        expect(updateResult.heroes[0]).toBe(testHeroes[0]);

        //Expecting to have the hero with the information updated.
        expect(updateResult.heroes[1]).toBe(heroUpdate);

    });
});