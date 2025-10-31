import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Store } from '@ngrx/store';
import { triggerSharedEvent } from '@sb-nx-monorepo-angular/common-services';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'request';
  constructor(private store: Store) {
    this.store.dispatch(triggerSharedEvent({ payload: 'Request initiated' }));
  }
}
