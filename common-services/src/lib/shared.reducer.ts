import { createReducer, on } from '@ngrx/store';
import { triggerSharedEvent, sharedEventSuccess } from './shared.actions';

export interface SharedState {
  lastPayload: string | null;
  successMessage: string | null;
}

export const initialState: SharedState = {
  lastPayload: null,
  successMessage: null,
};

export const sharedReducer = createReducer(
  initialState,
  on(triggerSharedEvent, (state, { payload }) => ({
    ...state,
    lastPayload: payload,
  })),
  on(sharedEventSuccess, (state, { message }) => ({
    ...state,
    successMessage: message,
  }))
);
