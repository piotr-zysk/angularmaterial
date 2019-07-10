import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  checked = true;
  indeterminate = false;
  align = 'start';
  disabled = false;

  toggle_checked() {
    this.checked = !this.checked;
  }
}
