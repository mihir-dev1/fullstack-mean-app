import { ResolveFn } from '@angular/router';
import { Category } from './category';
import { inject } from '@angular/core';
import { CoreService } from './core.service';

export const categoryResolver: ResolveFn<Category> = (route, state) => {
  const coreService = inject(CoreService); // Inject the service properly
  return coreService.getCategory(); // Return the observable directly
};

