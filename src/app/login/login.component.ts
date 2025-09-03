import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login.component',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  pin: string[] = [];
  pinBoxes = Array(4).fill(0);

  keys: (string | 'back')[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    'back', '0'
  ];

  constructor(private router: Router) { }

  pressKey(key: string | 'back') {
    if (key === 'back') {
      this.pin.pop(); // remove last
    } else if (this.pin.length < 4) {
      this.pin.push(key);
    }

    // Auto-redirect after 4 digits
    if (this.pin.length === 4) {
      this.router.navigate(['/accounts']); // replace with your route
    }
  }

  getPinValue(index: number) {
    return this.pin[index] || '';
  }
}


