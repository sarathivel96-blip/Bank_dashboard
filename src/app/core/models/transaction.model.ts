
export type TransctionType = "ACH" | 'WIRE' | 'CARD';

export type TransctionStatus = 'SUCCESS' | 'FAILED' | 'PENDING' | 'PARTIAL';

export interface Transaction {
    readonly id:string;
    readonly type: TransctionType;
    readonly amount: number;
    readonly status: TransctionStatus;
    readonly createdAt: Date;
    readonly metadata: Record<string, any>;
    
}