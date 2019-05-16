import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import * as actions from '../../store/actions';
@Component({
  selector: 'heroe-edit',
  templateUrl: 'hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {

  heroes: Hero[] = [];
  heroToEdit: Hero;
  idToSearch: number;

  constructor(private location: Location, private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.select('heroesState').
      subscribe(data => {
        this.heroes = data.heroes;
        this.activatedRoute.params.subscribe(params => {
          this.idToSearch = Number(params['id']);
          this.heroToEdit = this.heroes.find(hero => hero._id === this.idToSearch);
        });
      });
  }

  goToPreviousPage() {
    this.location.back();
  }

  updateHero() {

    let heroesUpdated: Hero[] = [];
    let index = 0;

    this.heroes.forEach(hero => {
      if (hero._id === this.idToSearch) {
        heroesUpdated[index] = this.heroToEdit;
      }
      else {
        heroesUpdated[index] = hero;
      }
      index++;
    })

    this.store.dispatch(new actions.LoadHeroesSuccess(heroesUpdated));
  }
}
