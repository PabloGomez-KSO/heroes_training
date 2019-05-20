import * as heroActions from './hero.actions';
import { Hero } from '../../model/hero.model';

describe('LoadHeroes action', () => {

  it('should create LoadHeroes action', () => {
    const action = new heroActions.LoadHeroes();
    expect(action.type).toEqual(heroActions.LOAD_HEROES);
  })
})


describe('LoadHeroesSuccess action', () => {
  it('should create a load heroes action successfully', () => {
    const testHeroes: Hero[] = [
      {
        _name: "Machine War",
        _height: 6.4,
        _picture: "test.jpg",
        _nickname: "War Pro"
      },
      {
        _name: "Hulk",
        _height: 7.0,
        _picture: "test.jpg",
        _nickname: "Monster"
      }
    ];
    const testAction = new heroActions.LoadHeroesSuccess(testHeroes);

    expect({ ...testAction }).toEqual({
      type: heroActions.LOAD_HEROES_SUCCESS,
      heroes: testHeroes
    });

  });
});

describe('UpdateHeroes action', () => {
  it('should create a update hero action', ()=> {
    
    const testHero: Hero = {
      _id: 2,
      _name: "Captain America",
      _height: 6.0,
      _picture: "text.jpg",
      _nickname: "Cap"
    };

    const testAction = new heroActions.UpdateHeroes(testHero);

    expect({ ...testAction }).toEqual({
      type: heroActions.UPDATE_HEROES,
      hero: testHero
    });
    
  });
});
