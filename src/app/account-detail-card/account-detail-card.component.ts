import { Component, Input } from '@angular/core';
import { AccountCard } from '../models';
import { NgClass } from '@angular/common';
import { HighlightService } from '../service/highlight.service';

@Component({
  selector: 'app-account-detail-card',
  imports: [NgClass],
  templateUrl: './account-detail-card.component.html',
  styleUrl: './account-detail-card.component.css'
})
export class AccountDetailCardComponent {
  @Input() card!: AccountCard;
  isBankIconHighlighted = false;
  ngOnInit() {
    const saved = sessionStorage.getItem('isBankIconHighlighted');
    if (saved !== null && this.card.amount === 1088) {
      this.isBankIconHighlighted = JSON.parse(saved);
    }
  }
  constructor(private highlightService: HighlightService) { }
  getAmountClass(): string {
    return this.card.currency && this.card.currency.toString().includes('-')
      ? 'amount-red'
      : 'amount-green';
  }

  getAccountIcon(): string {
    return this.card.amount === 1088
      ? 'account-icon-error'
      : 'account-icon';
  }

  getIconHighlight() {
    if (this.card.amount === 1088) {
      this.isBankIconHighlighted = !this.isBankIconHighlighted;
    }
    sessionStorage.setItem("isBankIconHighlighted", JSON.stringify(this.isBankIconHighlighted))
    if (this.isBankIconHighlighted) {
      this.highlightService.increment();
    } else {
      this.highlightService.decrement();
    }
  }
}
