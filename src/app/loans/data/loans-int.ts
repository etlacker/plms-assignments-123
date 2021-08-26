export interface Loan {
  id: number;
  bankName: string;
  bankImageUrl: string;
  minLoanAmount: number;
  maxLoanAmount: number;
  minInterestRate: number;
  maxInterestRate: number;
  minCreditScore: number;
  termLength: number;
  processingFee: number;
  rating: number;
  favouriteCount: number;
}
