import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-search-videogame',
  templateUrl: './search-videogame.component.html',
  styleUrls: ['./search-videogame.component.css']
})
export class SearchVideogameComponent {

  query: string;
  title = 'games';
  obsGames: Observable<Object>;
  results: any;
  constructor(public game: GamesService) {

  }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsGames = this.game.searchGame(this.query);
    this.obsGames.subscribe((data) => { this.results = data; console.log(this.results) });
  }


}
