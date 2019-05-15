import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'heroe-edit',
  templateUrl: 'hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})

export class HeroEditComponent implements OnInit {

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private location: Location) {
      this.activatedRoute.params.subscribe(params => {
        console.log(params);
      });
  }

  ngOnInit() {
  }

  goToPreviousPage(){
    console.log("entramos aca");
    this.location.back();

  }
}
