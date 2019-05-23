import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import { ActivatedRoute } from "@angular/router";
import * as actions from '../../store/actions';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getHeroes} from '../../store/selectors/hero.selector';
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
    this.store.dispatch(new actions.LoadHeroes());
    this.idToSearch = parseInt(this.activatedRoute.snapshot.params.id);
    this.setHeroFormValidator();

    this.store.pipe(select(getHeroes())).subscribe(heroes => {
       this.heroes = heroes;
       this.heroToEdit = heroes.find(hero => hero._id === this.idToSearch);

       if(this.heroToEdit){
         this.heroForm.controls['nickname'].setValue(this.heroToEdit._nickname);
         this.heroForm.controls['name'].setValue(this.heroToEdit._name);
         this.heroForm.controls['height'].setValue(this.heroToEdit._height);
       }
    });
  }

  setHeroFormValidator() {
    this.heroForm = new FormGroup({
      'nickname': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'height': new FormControl('', Validators.required)
    });
  }



  goToPreviousPage() {
    this.router.navigate(['/heroes']);
  }

  updateHero() {
    this.store.dispatch(new actions.UpdateHeroes(this.heroToEdit));
  }
}
