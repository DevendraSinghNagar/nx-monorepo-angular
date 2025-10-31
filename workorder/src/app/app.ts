import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Store } from '@ngrx/store';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'workorder';

  constructor(private store: Store) {
    this.store
      .select((state) => state.shared.successMessage)
      .subscribe((msg) => {
        console.log('Workorder App received:', msg);
      });
  }
}
