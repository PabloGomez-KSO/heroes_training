import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroEdit/:id', component:  HeroEditComponent },
  { path: '**', pathMatch: 'full',redirectTo: 'heroes'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class APP_ROUTES {}
