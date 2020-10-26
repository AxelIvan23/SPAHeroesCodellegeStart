import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../servicios/Hero.services';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  constructor(private _heroService: HeroService, private _router: Router) { }

  ArrayHeroes: any[] = [];

  ngOnInit(): void {
  	this.ArrayHeroes = this._heroService.getHeroes();
  }

  Navegar(index) {
  	console.log(index);
  	this._router.navigate(['/hero/', index]);
  }
}
