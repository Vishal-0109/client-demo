import { Component } from '@angular/core';
import { AccountCard } from '../models';
import { AccountDetailCardComponent } from '../account-detail-card/account-detail-card.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-detail.component',
  imports: [AccountDetailCardComponent],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css'
})
export class AccountDetailComponent {
  title = 'New Transfer'
  constructor(private router: Router) { }
  accounts: AccountCard[] = [
    { id: 1, account: 'At XX XXX XX123', currency: '$', amount: 1232, amountCents: 25 },
    { id: 2, account: 'At XX XXX XX123', currency: '€', amount: 1088, amountCents: 25 },
    { id: 3, account: 'At XX XXX XX123', currency: '€', amount: 1090, amountCents: 25 },
    { id: 4, account: 'At XX XXX XX123', currency: '€', amount: 1232, amountCents: 25 },
    { id: 5, account: 'At XX XXX XX123', currency: '-MX$', amount: 1232, amountCents: 25 },
    { id: 6, account: 'At XX XXX XX123', currency: '-KZT', amount: 1232, amountCents: 25 },
  ];

  goBack() {
    this.router.navigate(['/accounts']);
  }

  onLogout() {
    this.router.navigate(['/']);
  }
}
