import { Component, Input } from '@angular/core';
import { Transaction } from '../../../core/models/transaction.model';

@Component({
  standalone: true,
  selector: 'app-transaction-detail',
  template: `
    <div class="drawer">
      <h2>Transaction Detail</h2>
      <pre>{{ transaction | json }}</pre>
    </div>
  `
})
export class TransactionDetailDrawerComponent {
  @Input() transaction!: Transaction;
}
