import { ActionReducer, Action } from '@ngrx/store';
import { initialState, NgNgrxIdleState } from './ng-ngrx-idle.state';
import * as moment from 'moment';

export const ngNgrxIdleReducer: ActionReducer<NgNgrxIdleState> = (
  state = initialState,
  action: Action
) => {
  return {
    ...state,
    lastAccessed: moment()
  };
};
