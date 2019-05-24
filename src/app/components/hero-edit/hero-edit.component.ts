import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import { ActivatedRoute } from "@angular/router";
import * as actions from '../../store/actions';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getHeroes, getHeroById } from '../../store/selectors/hero.selector';
@Component({
  selector: 'heroe-edit',
  templateUrl: 'hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {
  heroes: Hero[] = null;
  heroToEdit: Hero;
  idToSearch: number;
  heroForm: FormGroup;
  succesfullyUpdate: boolean = false;

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }
  /**
  * This method call initialization of form and the hero to edit.
  * Get id parameter of URL.
  * Updates store in case of missing information. For example: reloading website.
  */
  ngOnInit() {
    this.setHeroFormValidator();
    this.idToSearch = parseInt(this.activatedRoute.snapshot.params.id);
    this.store.pipe(select(getHeroes())).subscribe(heroes => {
      this.heroes = heroes;
      if (!heroes) this.store.dispatch(new actions.LoadHeroes());
    });
    this.store.pipe(select(getHeroById(this.idToSearch))).subscribe(hero => {
      if (hero) this.heroToEdit = hero;
      if (this.heroToEdit) this.setFormValues();
    })
  }
  /**
  * This method initializes and put validators into the hero form.
  */
  setHeroFormValidator() {
    this.heroForm = new FormGroup({
      'nickname': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'height': new FormControl('', Validators.required)
    });
  }
  /*
  * This method set values of the form according to the data of the hero.
  */
  setFormValues() {
    this.heroForm.controls['nickname'].setValue(this.heroToEdit._nickname);
    this.heroForm.controls['name'].setValue(this.heroToEdit._name);
    this.heroForm.controls['height'].setValue(this.heroToEdit._height);
  }

  /*
  * This method allows router to navigate to our heroes page.
  */
  goToPreviousPage() {
    this.router.navigate(['/heroes']);
  }

  /*
  * If the heroForm is valid. This method updates the hero according to input values.
  */
  updateHero() {
    this.succesfullyUpdate = false;
    if (this.heroForm.valid) {
      this.heroToEdit._nickname = this.heroForm.controls['nickname'].value;
      this.heroToEdit._height = this.heroForm.controls['height'].value;
      this.heroToEdit._name = this.heroForm.controls['name'].value;
      this.succesfullyUpdate = true;
      this.store.dispatch(new actions.UpdateHeroes(this.heroToEdit));
    }
  }
}
