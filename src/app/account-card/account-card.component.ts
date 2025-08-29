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
  isHighlighted = false;
  isIconHighlighted = false;
  isAmountHighlighted = false;
  isAvailAmountHighlighted = false;
  isRed = false;
  @Input() card!: AccountCard;
  constructor(private router: Router) { }
  get amountSign() { return this.card.negative ? '–' : ''; }
  getAccent() { return this.card.accent; }
  goToTransfer() {
    this.router.navigate(['/account-detail']);
  }

  toggleColor() {
    this.isRed = !this.isRed;
  }
  getErrorHighlight() {
    if (this.card.title === 'girrro account') {
      this.isHighlighted = !this.isHighlighted
    }
  }

  getIconErrorHighlight() {
    if (this.card.title === 'Smartcard Mastercard') {
      this.isIconHighlighted = !this.isIconHighlighted
    }
  }

  getAmountErrorHighlight() {
    if (this.card.title === 'Portfolio') {
      this.isAmountHighlighted = !this.isAmountHighlighted
    }
  }

  getAvailAmountErrorHighlight() {
    if (this.card.title === 'girrro account') {
      this.isAvailAmountHighlighted = !this.isAvailAmountHighlighted
    }
  }
}
