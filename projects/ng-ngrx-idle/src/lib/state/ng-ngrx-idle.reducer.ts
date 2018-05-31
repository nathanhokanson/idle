import { ActionReducer, Action } from '@ngrx/store';
import { initialState, NgNgrxIdleState } from './ng-ngrx-idle.state';
import * as moment_ from 'moment';

const moment = moment_;

export function ngNgrxIdleReducer(
  state = initialState,
  action: Action
): NgNgrxIdleState {
  return {
    ...state,
    _ngNgrxIdle_lastAccessed: moment()
  };
}
