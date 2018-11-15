import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownNabila]'
})
export class DropdownNabilaDirective {

  @HostBinding('class.open') isOpen=false;

  @HostListener('click') toggleOpen()
  {
    this.isOpen=!this.isOpen;
  }

  //constructor() { }

}
