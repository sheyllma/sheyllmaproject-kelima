/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListNabilaService } from './shopping-listNabila.service';

describe('Service: ShoppingListNabila', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListNabilaService]
    });
  });

  it('should ...', inject([ShoppingListNabilaService], (service: ShoppingListNabilaService) => {
    expect(service).toBeTruthy();
  }));
});
