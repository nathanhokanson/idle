import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ngNgrxIdleReducer } from './state/ng-ngrx-idle.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ ngNgrxIdle: ngNgrxIdleReducer })]
})
export class NgNgrxIdleModule {}
