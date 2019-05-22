import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import { ActivatedRoute } from "@angular/router";
import * as actions from '../../store/actions';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'heroe-edit',
  templateUrl: 'hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {

  heroes: Hero[] = [];
  heroToEdit: Hero;
  idToSearch: number;
  loaded: boolean;
  heroForm: FormGroup;

  constructor(private store: Store<AppState>,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.store.select('heroesState').
      subscribe(data => {
        console.log(this.heroes);
        this.heroes = data.heroes;
        this.loaded = data.loaded;

        this.idToSearch = Number(this.activatedRoute.snapshot.params.id);

        this.activatedRoute.params.subscribe(params => {
          this.idToSearch = Number(params['id']);
          this.heroToEdit = this.heroes.find(hero => hero._id === this.idToSearch);
        });
      });

    if (!this.loaded) {
      this.store.dispatch(new actions.LoadHeroes());
    }

    this.setFormsValidators();
  }

  setFormsValidators(){
    this.heroForm = new FormGroup({
      'nickname': new FormControl(this.heroToEdit._nickname, Validators.required),
      'name': new FormControl(this.heroToEdit._name, Validators.required),
      'height': new FormControl(this.heroToEdit._height, Validators.required)
    });
  }

  goToPreviousPage() {
    this.router.navigate(['/heroes']);
  }

  updateHero() {
    this.store.dispatch(new actions.UpdateHeroes(this.heroToEdit));
  }
}
