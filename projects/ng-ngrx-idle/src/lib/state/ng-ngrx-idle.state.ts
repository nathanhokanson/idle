import * as moment_ from 'moment';

const moment = moment_;

export interface NgNgrxIdleState {
  _ngNgrxIdle_lastAccessed: any;
}

export const initialState: NgNgrxIdleState = {
  _ngNgrxIdle_lastAccessed: moment()
};
