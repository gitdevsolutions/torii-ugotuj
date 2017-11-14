import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'recipe',
  template: `
    <div *ngIf="recipe">
      <h3>{{recipe.name}}</h3>
      <img [src]="recipe.image">
      {{recipe.description}}   
      <hr>
        <button (click)="removePortion()"> - </button>
        <input type="number" [(ngModel)]="portions">
        <button (click)="addPortion()"> + </button>
      <hr>
      <table>
        <tbody>
          <tr *ngFor="let product of recipe.products">
            <td>{{product.amount * portions}}{{product.unit}}</td>
            <td>{{product.name}}</td>
          </tr>
        </tbody>
      </table>
      <hr>
    </div>
    <button [routerLink]="['/recipes']">Powrot</button>
  `,
  styles: []
})
export class RecipeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  portions = 2

  addPortion(){
    this.portions += 1
  }

  removePortion(){
    if(this.portions > 1){
      this.portions -= 1
    }
  }

  recipe

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
