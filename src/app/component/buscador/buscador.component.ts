import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../servicios/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService) { }
  Resultados: any = [];

  ngOnInit(): void {
  	this._aRoute.params.subscribe( params => {
  		this.Resultados = this._heroService.searchHeroes(params['termino']);
  		console.log(this.Resultados);
  	} )
  }

}
