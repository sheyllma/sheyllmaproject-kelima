import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'G:/Semester 3/belajar_angular/project-pertama/src/app/sharedNabila/ingredientNabila.model';
import { ShoppingListNabilaService } from '../shopping-listNabila.service';

@Component({
  selector: 'app-shopping-editNabila',
  templateUrl: './shopping-editNabila.component.html',
  styleUrls: ['./shopping-editNabila.component.css']
})
export class ShoppingEditNabilaComponent implements OnInit {



  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  //@Output() ingredientAdded= new EventEmitter<Ingredient>();

  constructor(private slsService:ShoppingListNabilaService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.slsService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
