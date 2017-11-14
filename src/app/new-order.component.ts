import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'new-order',
  template: `
   <div *ngIf="recipe">
      <h3>{{recipe.name}}</h3>
      <img [src]="recipe.image">
      <hr>
      <table>
        <tbody>
          <tr *ngFor="let product of recipe.products">
            <td><input type="checkbox" [(ngModel)]="product.selected"></td>
            <td>{{product.amount * portions}}{{product.unit}}</td>
            <td>{{product.name}}</td>
          </tr>
        </tbody>
      </table>     
      <hr>
      Razem do zaplaty: {{ calculateTotal() }}
      <hr>
      <div *ngIf="calculateTotal() > 0">
        <button (click)="placeOrder()">Zamow</button>
      </div>
  </div>
  `,
  styles: []
})
export class NewOrderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  placeOrder(){
    let order = {
      userId: 1,
      portions: this.portions,
      products: this.recipe.products.filter(product => product.selected),
      total: this.calculateTotal(),
      status: 'new'
    }
    this.http.post('http://localhost:3000/orders/',order)
    .subscribe((order)=>{
      this.router.navigate(['/recipes'],{
        queryParams:{
          newOrder: order['id']
        }
      })
    })
  }
    
  recipe

  fetchRecipe(id) {
    this.http.get('http://localhost:3000/recipes/' + id + '?_embed=products')
      .subscribe(recipe => {
        this.recipe = recipe

        // Preselect all
        recipe['products'].forEach(product => {
          product.selected = true
        });
      })
  }
  portions = 2

  ngOnInit() {
    let id = this.route.snapshot.queryParams['recipe']
    this.portions = this.route.snapshot.queryParams['portions']
    this.fetchRecipe(id)
  }


  calculateTotal() {
    let total = 0
    if (this.recipe && this.recipe.products) {
      this.recipe.products.forEach(product => {
        if(product.selected){
          total += product.unit_price * this.portions
        }
      })
    }
    return total
  }

}
