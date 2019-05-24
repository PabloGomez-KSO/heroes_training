import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import * as actions from '../../store/actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  loading: boolean;
  error: any;
  heroSelected: Hero;

  constructor(private store: Store<AppState>, private router: Router) { }
  /**
  * This method get the data from store and dispatch the action if it is necessary.
  */
  ngOnInit() {
    this.store.select('heroesState').
      subscribe(data => {
        this.heroes = data.heroes;
        this.loading = data.loading;
        this.error = data.error;
      }
      );

    if (!this.heroes) this.store.dispatch(new actions.LoadHeroes());
  }
  /*
   User will navigate to another view to edit a hero.
  */
  modifyHero(id: number) {
    this.router.navigate(['/heroEdit', id]);
  }
}
