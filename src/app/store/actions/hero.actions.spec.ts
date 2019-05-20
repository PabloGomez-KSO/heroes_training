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
    const testHeroes: Hero[] = [];

    testHeroes[0] = new Hero(888723, "MegaTron", 6.4, "test.jpg", "War Pro");
    testHeroes[1] = new Hero(742, "Obsidian Destroyer", 7.0, "test.jpg", "I am the watcher");

    const testAction = new heroActions.LoadHeroesSuccess(testHeroes);

    expect({ ...testAction }).toEqual({
      type: heroActions.LOAD_HEROES_SUCCESS,
      heroes: testHeroes
    });

  });
});

describe('UpdateHeroes action', () => {
  it('should create a update hero action', ()=> {


    const heroUpdate: Hero = new Hero(742, "Obsidian Destroyer", 7.0, "test.jpg", "I am the watcher");
    const testAction = new heroActions.UpdateHeroes(heroUpdate);

    expect({ ...testAction }).toEqual({
      type: heroActions.UPDATE_HEROES,
      hero: heroUpdate
    });

  });
});
