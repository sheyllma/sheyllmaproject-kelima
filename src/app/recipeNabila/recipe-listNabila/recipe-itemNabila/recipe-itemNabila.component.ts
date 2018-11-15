import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipeNabila.model';
import { RecipeNabilaService } from '../../recipeNabila.service';

@Component({
  selector: 'app-recipe-itemNabila',
  templateUrl: './recipe-itemNabila.component.html',
  styleUrls: ['./recipe-itemNabila.component.css']
})
export class RecipeItemNabilaComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() index:number;
  //@Output() recipeSelected=new EventEmitter<void>();

  // constructor(private recipeNabilaService:RecipeNabilaService) { }

  ngOnInit() {
  }

  // onSelected(){
    //  //this.recipeSelected.emit();
    // this.recipeNabilaService.recipeNabilaSelected.emit(this.recipe);
  //}
}
