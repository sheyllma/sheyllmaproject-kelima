import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedNabila/ingredientNabila.model';
import { ShoppingListNabilaService } from '../shopping-listNabila/shopping-listNabila.service';

@Component({
  selector: 'app-shopping-listNabila',
  templateUrl: './shopping-listNabila.component.html',
  styleUrls: ['./shopping-listNabila.component.css']
})
export class ShoppingListNabilaComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('Tomato',10),
  //];

  constructor(private slsService:ShoppingListNabilaService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  //onIngredientAdded(ingredient:Ingredient)
  //{
  //this.ingredients.push(ingredient);
//}
}
