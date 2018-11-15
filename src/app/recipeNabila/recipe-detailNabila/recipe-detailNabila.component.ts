import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeNabila.model';
import { RecipeNabilaService } from '../recipeNabila.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detailNabila',
  templateUrl: './recipe-detailNabila.component.html',
  styleUrls: ['./recipe-detailNabila.component.css']
})
export class RecipeDetailNabilaComponent implements OnInit {
  // @Input() recipe:Recipe;
  recipe:Recipe;
  id:number;

  constructor(private recipeNabilaService:RecipeNabilaService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeNabilaService.getRecipe(this.id);
      }
      )
  }

  onAddShoppingList(){
    this.recipeNabilaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
