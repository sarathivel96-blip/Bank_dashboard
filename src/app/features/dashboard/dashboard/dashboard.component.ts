import { Component, inject, OnInit } from '@angular/core';
import { SummaryPanelComponent } from '../summary-panel/summary-panel.component';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { TransactionService } from '../../../core/services/transaction.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [SummaryPanelComponent, TransactionTableComponent],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Banking Operations Dashboard</h1>
      <app-summary-panel></app-summary-panel>
      <app-transaction-table></app-transaction-table>
    </div>
  `
})
export class DashboardComponent implements OnInit {

  private service = inject(TransactionService);

  ngOnInit() {
    this.service.loadMockData();
  }
}