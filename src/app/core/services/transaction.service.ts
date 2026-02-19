import { Injectable, signal, computed } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  private readonly _transactions = signal<ReadonlyArray<Transaction>>([]);

  readonly transactions = this._transactions.asReadonly();

  readonly summary = computed(() => {
    const data = this._transactions();
    return {
      ACH: data.filter(t => t.type === 'ACH').length,
      WIRE: data.filter(t => t.type === 'WIRE').length,
      CARD: data.filter(t => t.type === 'CARD').length
    };
  });

  loadMockData() {
    const mock: Transaction[] = [
      { id: '1', type: 'ACH', amount: 1000, status: 'SUCCESS', createdAt: new Date(), metadata: {} },
      { id: '2', type: 'WIRE', amount: 5000, status: 'FAILED', createdAt: new Date(), metadata: {} },
      { id: '3', type: 'CARD', amount: 200, status: 'PARTIAL', createdAt: new Date(), metadata: {} }
    ];

    this._transactions.set([...mock]); // immutable update
  }

  updateStatus(id: string, status: Transaction['status']) {
    const updated = this._transactions().map(tx =>
      tx.id === id ? { ...tx, status } : tx
    );
    this._transactions.set(updated);
  }
}
