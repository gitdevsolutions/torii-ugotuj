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
        <input type="number" [ngModel]="portions" (ngModelChange)="setPortions($event)">
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
      Razem do zaplaty: {{calculateTotal()}}
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

  addPortion() {
    this.setPortions(this.portions + 1)
  }

  calculateTotal() {
    let total = 0
    if (this.recipe && this.recipe.products) {
      this.recipe.products.forEach(product => {
        total += product.unit_price * this.portions
      })
    }
    return total
  }

  setPortions(portions = 2) {
    if (this.portions <= 0) {
      this.portions = 1
    }else{
      this.portions = portions
    }
  }

  removePortion() {
    this.setPortions(this.portions - 1)
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
