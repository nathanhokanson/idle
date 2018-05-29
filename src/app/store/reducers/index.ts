import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as base from './base.reducer';

export const reducers: ActionReducerMap<base.AppState> = {
  app: base.reducer
};

export function logger(
  red: ActionReducer<base.AppState>
): ActionReducer<base.AppState> {
  return function(state: base.AppState, action: any): base.AppState {
    console.group();
    console.log('action', action);
    console.log('Initial State', state);
    const newState = red(state, action);
    console.log('New State', newState);
    console.groupEnd();
    return newState;
  };
}

export const metaReducers: MetaReducer<
  base.AppState
>[] = !environment.production ? [logger] : [];
