import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { triggerSharedEvent, sharedEventSuccess } from './shared.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SharedEffects {
  constructor(private actions$: Actions) {}

  logAndRespond$ = createEffect(() =>
    this.actions$.pipe(
      ofType(triggerSharedEvent),
      tap(({ payload }) => {
        console.log('Shared Event Triggered with:', payload);
      }),
      map(({ payload }) =>
        sharedEventSuccess({ message: `Processed: ${payload}` })
      )
    )
  );
}
