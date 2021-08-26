import { Injectable } from "@angular/core";
import { Loan } from './data/loans-int';
import { Observable, of } from "rxjs";
import { LOANS } from "./data/mock-loans";

@Injectable({
    providedIn: 'root'
  })
  export class LoanService {
      constructor () {}

      private log (msg: string): void {
          console.log(msg);
      }

      getLoans(): Observable<Loan[]> {
          const serviceLoans = of(LOANS);
          this.log("retrieved loans");
          return serviceLoans;
      }

  }