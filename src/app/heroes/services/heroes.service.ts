import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesServices {
  private baseUrl: string = environments.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
  getHeroById(id: string): Observable<Hero | undefined> {
    return this._httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      // devuelve un observable (of), que retorna undefined
      catchError((error) => of(undefined))
    );
  }
  // getHeroByEdit(id: string): Observable<Hero | undefined> {
  //   return this._httpClient.get<Hero>(`${this.baseUrl}/heroes/edit/${id}`);
  // }

  getSuggestions(query: string): Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=6`
    );
  }
}
