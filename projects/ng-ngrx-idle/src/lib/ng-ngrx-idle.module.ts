import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ngNgrxIdleReducer } from './state/ng-ngrx-idle.reducer';
import { NgNgrxIdleDirective } from './ng-ngrx-idle.directive';

@NgModule({
  imports: [StoreModule.forRoot({ ngNgrxIdle: ngNgrxIdleReducer })],
  exports: [NgNgrxIdleDirective],
  declarations: [NgNgrxIdleDirective]
})
export class NgNgrxIdleModule {}
