import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'heroe-edit',
  templateUrl: 'hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {

  heroes: Hero[] = [];
  heroToEdit: Hero;

  constructor(private location: Location, private store: Store<AppState>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.select('heroesState').
      subscribe(data => {
        this.heroes = data.heroes;
        this.activatedRoute.params.subscribe(params => {
          let idToSearch = params['id'];
          console.log(this.heroes);
          console.log(idToSearch);
          this.heroToEdit = this.heroes.find(hero => hero._id === idToSearch);
          console.log(this.heroToEdit);
        });
      });
  }

  goToPreviousPage() {
    this.location.back();
  }
}
