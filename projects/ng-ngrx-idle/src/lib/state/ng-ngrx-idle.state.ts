import * as moment from 'moment';

export interface NgNgrxIdleState {
  _ngNgrxIdle_lastAccessed: any;
}

export const initialState: NgNgrxIdleState = {
  _ngNgrxIdle_lastAccessed: moment()
};
