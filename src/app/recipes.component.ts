import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'recipes',
  template: `
    <h3>Recipes</h3>
    <div *ngFor="let recipe of recipes">
      <img [src]="recipe.image">
      {{recipe.name}}
    </div>
  `,
  styles: []
})
export class RecipesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  recipes

  fetchRecipes(){
    this.http.get('http://localhost:3000/recipes/')
        .subscribe( recipes => {
          this.recipes = recipes
        })
  }

  ngOnInit() {
    this.fetchRecipes()
  }

}
