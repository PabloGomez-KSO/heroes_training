import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

 /**
 * Get heroes calling getHeroesService
 * @param result - Update state of Heroes.
 */

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => console.log(heroes));
  }

}
