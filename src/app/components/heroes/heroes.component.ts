import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
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

  constructor(private heroService: HeroService, private store: Store<AppState>) { }

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

 /**
 * Get heroes calling getHeroesService
 * @param result - Update state of Heroes.
 */

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => console.log(heroes));
  }

}
