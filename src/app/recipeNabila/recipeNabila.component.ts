import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeNabila.model';
import { RecipeNabilaService } from './recipeNabila.service';

@Component({
  selector: 'app-recipeNabila',
  templateUrl: './recipeNabila.component.html',
  styleUrls: ['./recipeNabila.component.css'],
  providers: [RecipeNabilaService],
})
export class RecipeNabilaComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor(private recipeNabilaService:RecipeNabilaService) { }

  ngOnInit() {
    this.recipeNabilaService.recipeNabilaSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
