import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailDrawerComponent } from './transaction-detail-drawer.component';

describe('TransactionDetailDrawerComponent', () => {
  let component: TransactionDetailDrawerComponent;
  let fixture: ComponentFixture<TransactionDetailDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransactionDetailDrawerComponent]
    });
    fixture = TestBed.createComponent(TransactionDetailDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
