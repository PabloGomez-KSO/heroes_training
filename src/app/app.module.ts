import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';

//Services
import { HeroService } from './services/hero.service';

//Components
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeDetailComponent } from './components/hero-detail/hero-detail.component';

//Enviroment
import { environment } from '../enviroments/enviroment';

//Routes
import { APP_ROUTES } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot( effectsArr ),
    APP_ROUTES
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
