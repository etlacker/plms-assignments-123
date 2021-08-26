import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../customers';
import { Customer } from '../customer';
import { Loan } from '../loans/data/loans-int';

@Component({
  selector: 'app-applied-loans',
  templateUrl: './applied-loans.component.html',
  styleUrls: ['./applied-loans.component.css'],
})
export class AppliedLoansComponent implements OnInit {
  loans: Loan[] = [];
  creditScore?: number;
  constructor() {}

  ngOnInit(): void {
    let userID = sessionStorage.getItem('userID');
    if (userID != null) {
      let customer: Customer = CUSTOMERS[parseInt(userID)];
      this.loans = customer.appliedLoans;
      this.creditScore = customer.creditScore;
    }
  }
}
