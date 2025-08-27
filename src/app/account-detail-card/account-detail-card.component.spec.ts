import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailCardComponent } from './account-detail-card.component';

describe('AccountDetailCardComponent', () => {
  let component: AccountDetailCardComponent;
  let fixture: ComponentFixture<AccountDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetailCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
