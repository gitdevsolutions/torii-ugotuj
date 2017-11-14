import { RouterModule, Routes } from '@angular/router'
import { RecipesComponent } from "./recipes.component";

const routes:Routes = [
    { path: 'recipes', component: RecipesComponent}   
]

export const Routing = RouterModule.forRoot(routes,{
    useHash: true
})