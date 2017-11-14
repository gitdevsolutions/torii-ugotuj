import { RouterModule, Routes } from '@angular/router'
import { RecipesComponent } from "./recipes.component";
import { RecipeComponent } from "./recipe.component";
import { NewOrderComponent } from "./new-order.component";

const routes:Routes = [
    { path: 'recipes', component: RecipesComponent},
    { path: 'recipes/:id', component: RecipeComponent},
    { path: 'orders/create', component: NewOrderComponent }
]

export const Routing = RouterModule.forRoot(routes,{
    useHash: true
})