import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { HighlightService } from '../service/highlight.service';

@Component({
  selector: 'app-login.component',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  deferredPrompt: any;
  correctPin = '0000'
  isHighlighted = false;
  isButtonHighlighted = false;
  showInstallButton = true;
  ngOnInit(): void { }
  pin: string[] = [];
  pinBoxes = Array(4).fill(0);

  keys: (string | 'back')[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    'back', '0'
  ];

  constructor(private router: Router, private dialog: MatDialog, private highlightService: HighlightService) { }

  pressKey(key: string | 'back') {
     if (key === '4') {
      this.isButtonHighlighted = !this.isButtonHighlighted;
      if (this.isButtonHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
    if (key === 'back') {
      this.pin.pop(); // remove last
    } else if (this.pin.length < 4) {
      this.pin.push(key);

    }

    // Auto-redirect after 4 digits
    if (this.pin.length === 4) {
      if (this.pin.join('') === this.correctPin) {
        this.router.navigate(['/accounts']); // replace with your route
      } else {
        this.dialog.open(ModalComponent, {
          data: {
            title: 'Error',
            message: 'Please enter the correct pin',
            cssClass: 'error-message'
          },
          width: '90%',
          maxWidth: '400px',
          height: 'auto'
        })

      }
    }
  }
  getHighlight() {
    this.isHighlighted = !this.isHighlighted;
    if (this.isHighlighted) {
      this.highlightService.increment();
    } else {
      this.highlightService.decrement();
    }
  }

  getButtonHighlight(key: string) {
    if (key === '4') {
      console.log('key', key)
      this.isButtonHighlighted = !this.isButtonHighlighted;
      if (this.isButtonHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
  }

  getPinValue(index: number) {
    return this.pin[index] || '';
  }

}


