import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  searchGame(query: string) {
    const url = `https://api.rawg.io/api/games?page_size=10&search=${query}`;
    const headers = new HttpHeaders("Content-Type");
    return this.http.get(url, { headers });
  }
  gamesDetails(id: string) {
    const url = `https://api.rawg.io/api/games/${id}`;
    const headers = new HttpHeaders("Content-Type");
    return this.http.get(url, { headers });
  }
}
