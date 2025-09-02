import { Component } from '@angular/core';
import { AccountCardComponent } from '../account-card/account-card.component';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { AccountCard } from '../models';
import { Router } from '@angular/router';
import { HighlightService } from '../service/highlight.service';

@Component({
  selector: 'app-accounts.component',
  imports: [AccountCardComponent, BottomNavComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  title = 'Oveerview';
  isOverviewHighlighted = false;
  constructor(private router: Router, private highlightService: HighlightService) {
     const saved = sessionStorage.getItem('isOverviewHighlighted');
    if (saved !== null) {
      this.isOverviewHighlighted = JSON.parse(saved);
    }
   }
  
  accounts: AccountCard[] = [
    { id: 1, title: 'girrro account', amount: 3280, amountCents: 25, available: '3580.25', accent: 'red', icon: '💸', actionText: 'New Transfer' },
    { id: 2, title: 's Comfort Savings', amount: 7654, amountCents: 0, accent: 'green', icon: '🐷', actionText: 'Own Transfer' },
    { id: 3, title: 'Smartcard Mastercard', amount: 220, amountCents: 36, negative: true, prebooked: '33,80', available: '2745,54', accent: 'purple', icon: '🐷', actionText: 'Increase available amount' },
    { id: 4, title: 'Portfolio', amount: 4.78, amountCents: 90, accent: 'purple', icon: '📈' }
  ];
  onLogout() {
    alert("Total selected bugs: " + this.highlightService.count.value);
    this.router.navigate(['/']);
    this.highlightService.count.next(0);
    sessionStorage.clear();
  }

  getTitleHighlight() {
    this.isOverviewHighlighted = !this.isOverviewHighlighted;
    sessionStorage.setItem("isOverviewHighlighted", JSON.stringify(this.isOverviewHighlighted))
    if (this.isOverviewHighlighted) {
      this.highlightService.increment();
    } else {
      this.highlightService.decrement();
    }
  }
}

