import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as actions from '../../store/actions'
import { HeroesComponent } from './heroes.component';
import { appReducers } from '../../store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { HeightConversionPipe} from '../../pipes/heightConversion.pipe';
import { IdConversionPipe } from '../../pipes/idConversion.pipe';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from '../../store/effects';
import { HeroService } from '../../services/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HeroesComponent', () => {

  let heroesComponent: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let store: Store<AppState>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot( effectsArr),
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        HeroesComponent,
        HeightConversionPipe,
        IdConversionPipe
      ],
      providers: [
        HeroService
      ]
    })

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HeroesComponent);
    heroesComponent = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Heroes Component should be created', () => {
    expect(heroesComponent).toBeTruthy();
  });


  it('Should dispatch an action to Load Heroes when the component is rendered', ()=> {
    const loadHeroesAction = new actions.LoadHeroes();
    expect(store.dispatch).toHaveBeenCalledWith(loadHeroesAction);
  });

});
