import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroeDetailComponent } from '../app/components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../app/components/heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero', component:  HeroeDetailComponent },
  { path: '**', pathMatch: 'full',redirectTo: 'heroes'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class APP_ROUTES {}
