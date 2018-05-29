import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgNgrxIdleModule } from 'projects/ng-ngrx-idle/src/public_api';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './store/reducers';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    NgNgrxIdleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
