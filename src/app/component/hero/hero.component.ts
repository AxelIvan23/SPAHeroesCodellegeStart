import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../servicios/Hero.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:any= {};

  constructor( private _activatedRoute: ActivatedRoute, private _heroService: HeroService) { 
  	this._activatedRoute.params.subscribe( param =>  {
  		this.hero = this._heroService.getHero(param['id']);
  	})
  }

  ngOnInit(): void {
  }

  
}
