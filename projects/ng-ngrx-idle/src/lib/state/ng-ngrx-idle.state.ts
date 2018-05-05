import * as moment from 'moment';

export interface NgNgrxIdleState {
  lastAccessed: any;
}

export const initialState: NgNgrxIdleState = {
  lastAccessed: moment()
};
