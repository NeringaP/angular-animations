import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'pink',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'red',
        transform: 'translateX(100px)'
      }))
    ])
  ]
})
export class AppComponent {
  title = 'animations';
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state =='normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

}
