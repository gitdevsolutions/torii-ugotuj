import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'recipes',
  template: `
    <p>
      recipes works!
    </p>
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
