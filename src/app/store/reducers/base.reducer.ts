import { Action, ActionReducer } from '@ngrx/store';

export interface AppState {
  app: BaseState;
}

export interface BaseState {
  blah: any;
}

export const initialState: BaseState = {
  blah: ''
};

export function reducer(
  state: BaseState = initialState,
  action: Action
): BaseState {
  return state;
}
