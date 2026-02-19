import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../../core/services/transaction.service';

@Component({
  standalone: true,
  selector: 'app-transaction-table',
  imports: [CommonModule],
  template: `
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let tx of transactions()">
          <td>{{ tx.id }}</td>
          <td>{{ tx.type }}</td>
          <td>{{ tx.amount | currency }}</td>
          <td>{{ tx.status }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class TransactionTableComponent {
  private service = inject(TransactionService);
  transactions = this.service.transactions;
}
