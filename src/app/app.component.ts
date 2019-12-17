import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  toastTypes: Array<string> = [];


  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'warning', 'danger', 'info'];
  }
  // success, warning, danger, info

  showToast() {
    const rand = Math.floor(Math.random() * 4);
    console.log('random number...', rand);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'Hi, my name is Jim Yang and the random number for this is a message: ' + rand;
    const duration = 3000;

    this.toastService.showToast(toastType, toastMessage, duration);
  }
}
