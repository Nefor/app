import { Component } from '@angular/core';

@Component({
  selector: 'frontend',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
  name = 'Frontend!';
}
