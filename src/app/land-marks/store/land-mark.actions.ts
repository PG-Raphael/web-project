import { Action } from '@ngrx/store';

import { LandMark } from '../land-mark.model';

export const SET_LANDMARKS = 'SET_LANDMARKS';
export const ADD_LANDMARKS = 'ADD_LANDMARKS';
export const UPDATE_LANDMARK = 'UPDATE_LANDMARK';
export const DELETE_LANDMARK = 'DELETE_LANDMARK';
export const STORE_LANDMARK = 'STORE_LANDMARK';
export const FETCH_LANDMARK = 'FETCH_LANDMARK';

export class SetLandMarks implements Action {
  readonly type = SET_LANDMARKS;

  constructor(public payload: LandMark[]) {}
}

export class AddLandMark implements Action {
  readonly type = ADD_LANDMARKS;

  constructor(public payload: LandMark) {}
}

export class UpdateLandMark implements Action {
  readonly type = UPDATE_LANDMARK;

  constructor(public payload: {index: number, updateLandMark: LandMark}) {}
}

export class DeleteLandMark implements Action {
  readonly type = DELETE_LANDMARK;

  constructor(public payload: number) {}
}

export class StoreLadMarks implements Action {
  readonly type = STORE_LANDMARK;
}

export class FetchLandMarks implements Action {
  readonly type = FETCH_LANDMARK;
}

export type LandMarkActions = SetLandMarks |
  AddLandMark |
  UpdateLandMark |
  DeleteLandMark |
  StoreLadMarks |
  FetchLandMarks;
