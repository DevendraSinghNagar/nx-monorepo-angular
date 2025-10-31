import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Output() clicked = new EventEmitter<void>();
  handleClick() {
    this.clicked.emit();
  }
}
