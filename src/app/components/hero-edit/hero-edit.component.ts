import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Hero } from '../../model/hero.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'heroe-edit',
  templateUrl: 'hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: ActivatedRoute) {

      this.router.params.subscribe(params => {
        console.log(params);
      });

  }

  ngOnInit() {


  }
}
