import { Loan } from './loans-int';

export const LOANS: Loan[] = [
  {
    id: 1,
    bankName: 'Bank of America',
    bankImageUrl: 'bank1_boa.png',
    minLoanAmount: 5000,
    maxLoanAmount: 100000,
    minInterestRate: 4.99,
    maxInterestRate: 15.69,
    minCreditScore: 660,
    termLength: 48,
    processingFee: 100,
    rating: 4.9,
    favouriteCount: 10,
  },
  {
    id: 2,
    bankName: 'Chase',
    bankImageUrl: 'bank2_chase.png',
    minLoanAmount: 4000,
    maxLoanAmount: 50000,
    minInterestRate: 5.99,
    maxInterestRate: 18.69,
    minCreditScore: 680,
    termLength: 60,
    processingFee: 150,
    rating: 4.5,
    favouriteCount: 15,
  },
  {
    id: 3,
    bankName: 'State Farm',
    bankImageUrl: 'bank3_statefarm.png',
    minLoanAmount: 3500,
    maxLoanAmount: 40000,
    minInterestRate: 6.99,
    maxInterestRate: 25.69,
    minCreditScore: 660,
    termLength: 60,
    processingFee: 120,
    rating: 4.7,
    favouriteCount: 14,
  },
];
