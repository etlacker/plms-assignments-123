import { Component, OnInit } from '@angular/core';
import { Loan } from './data/loans-int';
import { LoanService } from './loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.getLoans().subscribe(
      (serviceLoans) => (this.loans = serviceLoans),
      (error) => console.log(error)
    );
  }

  onApply(): void {
    // would contain apply logic if we had a modifiable database
  }
}
