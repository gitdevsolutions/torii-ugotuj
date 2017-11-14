import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe.component';
import { NewOrderComponent } from './new-order.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
