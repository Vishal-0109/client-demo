import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HighlightService {
  public count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  increment() {
    this.count.next(this.count.value + 1);
  }

  decrement() {
    this.count.next(this.count.value - 1);
  }
}
