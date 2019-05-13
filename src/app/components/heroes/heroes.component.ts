import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from  '../../store/app.reducers';
import { Hero } from '../../model/hero.model';

import * as actions from '../../store/actions';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {


  heroes: Hero[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('heroes').
        subscribe(data => {
             this.heroes = data.heroes;
             this.loading = data.loading;
             this.error = data.error;

             console.log(this.heroes);

        });

    this.store.dispatch(new actions.LoadHeroes());

  }
}
