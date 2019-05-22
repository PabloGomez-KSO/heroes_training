import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero.model';
import { map } from 'rxjs/operators'
@Injectable()
export class HeroService {

  public apiUrl = 'https://udem.herokuapp.com/heroes/';

  constructor(private http: HttpClient) {
  }

  /**
  * Get heroes calling URL Api
  * @param result - An observable with an array of heroes.
  */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl).pipe(
      map(heroes => {
        heroes.forEach((hero, index) => {
          hero._id = index + 1;
        })
        return heroes;
      })
    );
  }
}
