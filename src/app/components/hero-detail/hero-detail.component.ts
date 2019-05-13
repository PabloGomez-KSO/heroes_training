import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from  '../../store/app.reducers';
import { Hero } from '../../model/hero.model';

import * as actions from '../../store/actions';

@Component({
  selector: 'heroe-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroeDetailComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {


  }
}
