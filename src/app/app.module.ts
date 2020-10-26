import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { HerosComponent } from './component/heros/heros.component';
import { AboutComponent } from './component/about/about.component';


import {RouterModule} from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { HeroComponent } from './component/hero/hero.component';
import { Router } from "@angular/router";
import { BuscadorComponent } from './component/buscador/buscador.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    ErrorComponent,
    HeroComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'heros', component: HerosComponent},
      {path: 'about', component: AboutComponent},
      {path: 'hero/:id', component: HeroComponent},
      {path: 'results/:termino', component: BuscadorComponent},
      {path: '**', pathMatch: 'full', component: ErrorComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
