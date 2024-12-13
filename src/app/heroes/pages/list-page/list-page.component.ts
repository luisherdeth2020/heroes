import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesServices } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private _heroesService: HeroesServices) {}

  ngOnInit(): void {
    this._heroesService.getHeroes()
    .subscribe((heroes) => {
      this.heroes = heroes;
      console.log('herooooes', heroes);
    });
  }
}