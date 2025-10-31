import { createAction, props } from '@ngrx/store';

export const triggerSharedEvent = createAction(
  '[Shared] Trigger Event',
  props<{ payload: string }>()
);

export const sharedEventSuccess = createAction(
  '[Shared] Event Success',
  props<{ message: string }>()
);
