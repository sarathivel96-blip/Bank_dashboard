import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../../core/services/transaction.service';

@Component({
  standalone: true,
  selector: 'app-summary-panel',
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-3 gap-4">
      <div class="card">ACH: {{ summary().ACH }}</div>
      <div class="card">WIRE: {{ summary().WIRE }}</div>
      <div class="card">CARD: {{ summary().CARD }}</div>
    </div>
  `
})
export class SummaryPanelComponent {
  private service = inject(TransactionService);
  summary = this.service.summary;
}
