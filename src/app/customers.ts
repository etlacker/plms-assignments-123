import { Customer } from './customer';
import { LOANS } from './loans/data/mock-loans';

export const CUSTOMERS: Customer[] = [
  {
    id: 0,
    name: 'Conner',
    email: 'conner@vanguard.com',
    password: '12345',
    creditScore: 850,
    appliedLoans: [LOANS[0], LOANS[1]],
  },
  {
    id: 1,
    name: 'Eric',
    email: 'eric@vanguard.com',
    password: '54321',
    creditScore: 670,
    appliedLoans: [LOANS[0], LOANS[1], LOANS[2]],
  },
];
