import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Hero } from '../model/hero.model';

@Injectable()
export class HeroService {


  private apiUrl = 'https://udem.herokuapp.com/heroes/';


  constructor(private http: HttpClient) {
  }

  /**
  * Get heroes calling URL Api
  * @param result - An observable with an array of heroes.
  */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
