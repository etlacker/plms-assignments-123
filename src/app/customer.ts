import { Loan } from './loans/data/loans-int';

export interface Customer {
  id: number;
  name: string;
  email: string;
  password: string;
  creditScore: number;
  appliedLoans: Loan[];
}
