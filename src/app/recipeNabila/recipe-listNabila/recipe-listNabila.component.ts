import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeNabila.model';
import { RecipeNabilaService } from '../recipeNabila.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-listNabila',
  templateUrl: './recipe-listNabila.component.html',
  styleUrls: ['./recipe-listNabila.component.css']
})
export class RecipeListNabilaComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe
 
  constructor(private recipeNabilaService:RecipeNabilaService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeNabilaService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  //onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  //}
  
}
