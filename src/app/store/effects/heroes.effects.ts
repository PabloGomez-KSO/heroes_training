
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';
import * as heroActions from '../../store/actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroesEffects {


  constructor(
    private actions$: Actions,
    public heroService: HeroService
  ) {
  }


  @Effect()
  loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES)
    .pipe(
      switchMap(() => {
        return this.heroService.getHeroes()
          .pipe(
            map(heroes => new heroActions.LoadHeroesSuccess(heroes)),
            catchError(error => {

              console.log("entre acaa");

              return of(new heroActions.LoadHeroesFail(error));


            })
          );
      })
    );

}
