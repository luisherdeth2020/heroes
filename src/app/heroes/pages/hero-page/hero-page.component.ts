import { Component, OnInit } from '@angular/core';
import { HeroesServices } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [],
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private _heroesService: HeroesServices,
    private _activatedRouted: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRouted.params
      .pipe(
        // delay(3000),
        // me permite tomar los params, para recoger el id
        switchMap(({ id }) => this._heroesService.getHeroById(id))
      )
      .subscribe((heroe) => {
        // console.log({ params });
        if (!heroe) return this._router.navigate(['/heroes/list']);
        this.hero = heroe;
        console.log({heroe})
        return;
      });
  }

  goBack():void{
    this._router.navigateByUrl('heroes/list')
  }
}
