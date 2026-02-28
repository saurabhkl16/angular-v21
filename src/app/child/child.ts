import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() userName: any;
  @Input() speed: any;
  @Output() selectedUser = new EventEmitter();

  public selected(name: any) {
    this.selectedUser.emit(name);
  }
}
