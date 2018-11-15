import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-editNabila',
  templateUrl: './recipe-editNabila.component.html',
  styleUrls: ['./recipe-editNabila.component.css']
})
export class RecipeEditNabilaComponent implements OnInit {
id:number;
editMode=false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        console.log(this.editMode);
      }
      )
  }

}
