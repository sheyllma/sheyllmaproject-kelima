/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeNabilaService } from './recipeNabila.service';

describe('Service: RecipeNabila', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeNabilaService]
    });
  });

  it('should ...', inject([RecipeNabilaService], (service: RecipeNabilaService) => {
    expect(service).toBeTruthy();
  }));
});
