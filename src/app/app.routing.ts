import { RouterModule, Routes } from '@angular/router'
import { RecipesComponent } from "./recipes.component";
import { RecipeComponent } from "./recipe.component";

const routes:Routes = [
    { path: 'recipes', component: RecipesComponent},
    { path: 'recipes/:id', component: RecipeComponent}   
]

export const Routing = RouterModule.forRoot(routes,{
    useHash: true
})