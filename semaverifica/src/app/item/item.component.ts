import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
import { GamesService } from '../games.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  routeObs: Observable<ParamMap>;

  games : any;selezionata
  gameServiceObs: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private service: GamesService,
    private location: Location ) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    let gameId = params.get('id');
    console.log (gameId);
    this.gameServiceObs = this.service.gamesDetails(gameId) ;
    this.gameServiceObs.subscribe((data)=>this.games = data)
  }

   back() : void
  {
    this.location.back();
  }

}
