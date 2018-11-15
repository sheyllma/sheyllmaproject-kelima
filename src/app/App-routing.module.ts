import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeNabilaComponent } from './recipeNabila/recipeNabila.component';
import { ShoppingListNabilaComponent } from './shopping-listNabila/shopping-listNabila.component';
import { RecipeStartNabilaComponent } from './recipeNabila/recipe-startNabila/recipe-startNabila.component';
import { RecipeDetailNabilaComponent } from './recipeNabila/recipe-detailNabila/recipe-detailNabila.component';
import { RecipeEditNabilaComponent } from './recipeNabila/recipe-editNabila/recipe-editNabila.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/recipe',pathMatch:'full'},
    { path:'recipes',component:RecipeNabilaComponent,children:[
        {path:'',component:RecipeStartNabilaComponent},
        {path:'new',component:RecipeEditNabilaComponent},
        {path:':id',component:RecipeDetailNabilaComponent},
        {path:':id/edit',component:RecipeEditNabilaComponent},
    ]},
    { path:'shopping-listNabila',component:ShoppingListNabilaComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}


