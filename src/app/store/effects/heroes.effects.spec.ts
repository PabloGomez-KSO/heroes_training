import { TestBed } from '@angular/core/testing';
import * as heroActions from '../actions';
import { Hero } from '../../model/hero.model';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot, initTestScheduler } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { HeroesEffects } from './heroes.effects';
import { HeroService } from '../../services/hero.service'

describe('HeroesEffects', () => {


  const testHeroes: Hero[] = [];

  testHeroes[0] = new Hero(888723, "MegaTron", 6.4, "test.jpg", "War Pro");
  testHeroes[1] = new Hero(742, "Obsidian Destroyer", 7.0, "test.jpg", "I am the watcher");

  let actions: Observable<any>;

  let effects: HeroesEffects;
  let heroService: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    initTestScheduler();

    TestBed.configureTestingModule({
      providers: [
        HeroesEffects,
        provideMockActions(() => actions),
        {
          provide: HeroService,
          useValue: {
            getHeroes: jasmine.createSpy()
          }
        }
      ]
    });
    effects = TestBed.get(HeroesEffects);
    heroService = TestBed.get(HeroService);
  });


  describe('loadHeroes effect', () => {
    it('should return a stream with a heroes success action ', () => {
      const action = new heroActions.LoadHeroes();
      const outcome = new heroActions.LoadHeroesSuccess(testHeroes);

      actions = hot('-a', { a: action });  //Waiting 10 frames. emit the action. It is used as a trigger to emit our heroes load action.


      const response = cold('-a|', { a: testHeroes });
      heroService.getHeroes.and.returnValue(response); //Waiting 10 frames, returning getHeroes service observable.

      const expected = cold('--b', { b: outcome }); //It is expected to have that action.
      expect(effects.loadHeroes$).toBeObservable(expected);

    });
  });
});


