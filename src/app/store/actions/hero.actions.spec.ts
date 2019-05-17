import * as heroActions from './hero.actions';
import { Hero } from '../../model/hero.model';

describe('LoadHeroes action', () => {

  it('should create LoadHeroes action', () => {
    const action = new heroActions.LoadHeroes();
    expect(action.type).toEqual(heroActions.LOAD_HEROES);
  })
})


describe('LoadHeroesSuccess action', () => {
  it('should create an action', () => {
    const payload: Hero[] = [
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
    const action = new heroActions.LoadHeroesSuccess(payload);

    expect({ ...action }).toEqual({
      type: heroActions.LOAD_HEROES_SUCCESS,
      heroes: payload
    });

  });

});
