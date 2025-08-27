import { Component, Input } from '@angular/core';
import { AccountCard } from '../models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-account-detail-card',
  imports: [NgClass],
  templateUrl: './account-detail-card.component.html',
  styleUrl: './account-detail-card.component.css'
})
export class AccountDetailCardComponent {
  @Input() card!: AccountCard;
  getAmountClass(): string {
    return this.card.currency && this.card.currency.toString().includes('-')
      ? 'amount-red'
      : 'amount-green';
  }
}
