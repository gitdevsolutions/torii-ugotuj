import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'recipe',
  template: `
    <p>
      recipe works!
    </p>
    {{recipe.name}}
    {{recipe.products | json }}
  `,
  styles: []
})
export class RecipeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  recipe = {}

  fetchRecipe(id) {
    this.http.get('http://localhost:3000/recipes/' + id + '?_embed=products')
      .subscribe(recipe => {
        this.recipe = recipe
      })
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.fetchRecipe(id)
  }

}
