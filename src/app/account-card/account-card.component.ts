import { Component, Input } from '@angular/core';
import { AccountCard } from '../models'
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-account-card',
  imports: [NgStyle],
  standalone: true,
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent {
  @Input() card!: AccountCard;
  constructor(private router: Router) { }
  get amountSign() { return this.card.negative ? '–' : ''; }
  getAccent() { console.log(this.card.accent); return this.card.accent; }
  goToTransfer() {
    this.router.navigate(['/account-detail']);
  }
  // component.ts
isRed = false;

toggleColor() {
  this.isRed = !this.isRed;
}
isHighlighted = false;
}
