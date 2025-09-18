import { Component } from '@angular/core';
import { AccountCard } from '../models';
import { AccountDetailCardComponent } from '../account-detail-card/account-detail-card.component'
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightService } from '../service/highlight.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-account-detail.component',
  imports: [AccountDetailCardComponent],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css'
})
export class AccountDetailComponent {
  isTitleHighlighted = false;
  actionText;
  title = 'New Transfer'
  constructor(private router: Router, private route: ActivatedRoute, private highlightService: HighlightService, private dialog: MatDialog) {
    this.actionText = this.route.snapshot.paramMap.get('actionText');
    const saved = sessionStorage.getItem('isTitleHighlighted');
    const savedActionText = sessionStorage.getItem('actionText');
    if (saved !== null && savedActionText != null && this.actionText === JSON.parse(savedActionText)) {
      this.isTitleHighlighted = JSON.parse(saved);
    }
  }

  accounts: AccountCard[] = [
    { id: 1, account: 'At 45 111 21123', currency: '$', amount: 1232, amountCents: '38' },
    { id: 2, account: 'At 29 111 33424', currency: '€', amount: 1088, amountCents: '19' },
    { id: 3, account: 'At 66 111 21125', currency: '€', amount: 1090, amountCents: '15' },
    { id: 4, account: '', currency: '€', amount: 1666, amountCents: '22' },
    { id: 5, account: 'At 67 111 21127', currency: '-MX$', amount: 17236, amountCents: '26' },
    { id: 6, account: 'At 87 111 21128', currency: '-KZT', amount: 15720, amountCents: '27' },
  ];

  goBack() {
    this.router.navigate(['/accounts']);
  }

  onLogout() {
    // alert("Total selected bugs: " + this.highlightService.count.value);
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Bugs',
        message: 'Total selected bugs: ' + this.highlightService.count.value
      },
      width: '90%',       // almost full width on small devices
      maxWidth: '400px',  // don’t exceed this on larger screens
      height: 'auto'
    })
    this.router.navigate(['/']);
    this.highlightService.count.next(0);
    sessionStorage.clear();
  }

  getTitleHighlight() {
    if (this.actionText != 'New Transfer') {
      this.isTitleHighlighted = !this.isTitleHighlighted;
      sessionStorage.setItem("isTitleHighlighted", JSON.stringify(this.isTitleHighlighted))
      sessionStorage.setItem("actionText", JSON.stringify(this.actionText))
      if (this.isTitleHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
  }
}
