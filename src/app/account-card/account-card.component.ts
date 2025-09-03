import { Component, Input } from '@angular/core';
import { AccountCard } from '../models'
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { HighlightService } from '../service/highlight.service';
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
  constructor(private router: Router, private highlightService: HighlightService) { }
  ngOnInit() {
    const savedIsHighlighted = sessionStorage.getItem('isHighlighted');
    const savedIsIconHighlighted = sessionStorage.getItem('isIconHighlighted');
    const savedIsAmountHighlighted = sessionStorage.getItem('isAmountHighlighted');
    const savedIsAvailAmountHighlighted = sessionStorage.getItem('isAvailAmountHighlighted');
    if (this.card.title !== null) {
      if (savedIsHighlighted !== null && this.card.title === 'girrro account') {
        this.isHighlighted = JSON.parse(savedIsHighlighted);
      }
      if (savedIsIconHighlighted !== null && this.card.title === 'Smartcard Mastercard') {
        this.isIconHighlighted = JSON.parse(savedIsIconHighlighted);
      }
      if (savedIsAmountHighlighted !== null && this.card.title === 'Portfolio') {
        this.isAmountHighlighted = JSON.parse(savedIsAmountHighlighted);
      }
      if (savedIsAvailAmountHighlighted !== null && this.card.title === 'girrro account') {
        this.isAvailAmountHighlighted = JSON.parse(savedIsAvailAmountHighlighted);
      }
    }
  }
  get amountSign() { return this.card.negative ? '–' : ''; }
  getAccent() { return this.card.accent; }
  goToTransfer(actionText: String) {
    this.router.navigate(['/account-detail', actionText]);
  }

  toggleColor() {
    this.isRed = !this.isRed;
  }
  getErrorHighlight() {
    if (this.card.title === 'girrro account') {
      this.isHighlighted = !this.isHighlighted
      sessionStorage.setItem("isHighlighted", JSON.stringify(this.isHighlighted))
      if (this.isHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
  }

  getIconErrorHighlight() {
    if (this.card.title === 'Smartcard Mastercard') {
      this.isIconHighlighted = !this.isIconHighlighted
      sessionStorage.setItem("isIconHighlighted", JSON.stringify(this.isIconHighlighted))
      if (this.isIconHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
  }

  getAmountErrorHighlight() {
    if (this.card.title === 'Portfolio') {
      this.isAmountHighlighted = !this.isAmountHighlighted
      sessionStorage.setItem("isAmountHighlighted", JSON.stringify(this.isAmountHighlighted))
      if (this.isAmountHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
  }

  getAvailAmountErrorHighlight() {
    if (this.card.title === 'girrro account') {
      this.isAvailAmountHighlighted = !this.isAvailAmountHighlighted
      sessionStorage.setItem("isAvailAmountHighlighted", JSON.stringify(this.isAvailAmountHighlighted))
      if (this.isAvailAmountHighlighted) {
        this.highlightService.increment();
      } else {
        this.highlightService.decrement();
      }
    }
  }
}
