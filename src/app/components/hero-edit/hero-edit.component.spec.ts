import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as actions from '../../store/actions'
import { HeroEditComponent } from './hero-edit.component';
import { appReducers } from '../../store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from '../../store/effects';
import { HeroService } from '../../services/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../model/hero.model';

describe('HeroeEditComponent', () => {

  let heroEditComponent: HeroEditComponent;
  let fixture: ComponentFixture<HeroEditComponent>;
  let store: Store<AppState>;

  const testHeroes: Hero[] = [];
  testHeroes[0] = new Hero(1, "Machine War", 6.4, "test.jpg", "War Pro");
  testHeroes[1] = new Hero(2, "Hulk", 7.0, "test.jpg", "Monster");

  const heroUpdate: Hero = new Hero(2, "Hulk The Pro Hero", 7.0, "test.jpg","Big Monster");


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot(effectsArr),
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        HeroEditComponent
      ],
      providers: [
        HeroService
      ]
    })

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HeroEditComponent);
    heroEditComponent = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Hero Edit Component should be created', () => {
    expect(heroEditComponent).toBeTruthy();
  });


  it('should display a list of heroes after the data is loaded', () => {

    const action = new actions.LoadHeroesSuccess(testHeroes);
    store.dispatch(action);
    heroEditComponent.ngOnInit();
    console.log(heroEditComponent.heroes);

    expect(heroEditComponent.heroes).toEqual(testHeroes);

  });

  it('should call an action to update Hero', () => {
    const action = new actions.UpdateHeroes(heroUpdate);
    heroEditComponent.heroToEdit = heroUpdate;
    heroEditComponent.updateHero();

    expect(store.dispatch).toHaveBeenCalledWith(action);

  });


});
