import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderNabilaComponent } from './headerNabila/headerNabila.component';
import { RecipeNabilaComponent } from './recipeNabila/recipeNabila.component';
import { ShoppingListNabilaComponent } from './shopping-listNabila/shopping-listNabila.component';
import { RecipeDetailNabilaComponent } from './recipeNabila/recipe-detailNabila/recipe-detailNabila.component';
import { RecipeListNabilaComponent } from './recipeNabila/recipe-listNabila/recipe-listNabila.component';
import { RecipeItemNabilaComponent } from './recipeNabila/recipe-listNabila/recipe-itemNabila/recipe-itemNabila.component';
import { ShoppingEditNabilaComponent } from './shopping-listNabila/shopping-editNabila/shopping-editNabila.component';
import { DropdownNabilaDirective } from './sharedNabila/dropdownNabila.directive';
import { ShoppingListNabilaService } from './shopping-listNabila/shopping-listNabila.service';
import { RecipeStartNabilaComponent } from './recipeNabila/recipe-startNabila/recipe-startNabila.component';
import { RecipeEditNabilaComponent } from './recipeNabila/recipe-editNabila/recipe-editNabila.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNabilaComponent,
    RecipeNabilaComponent,
    ShoppingListNabilaComponent,
    RecipeListNabilaComponent,
    RecipeDetailNabilaComponent,
    RecipeItemNabilaComponent,
    ShoppingEditNabilaComponent,
    DropdownNabilaDirective,
    RecipeStartNabilaComponent,
    RecipeEditNabilaComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListNabilaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
