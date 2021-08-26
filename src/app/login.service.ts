import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './customers';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  verifyLogin(email: string, password: string): boolean {
    CUSTOMERS.forEach((customer) => {
      console.log(customer.email);
      if (customer.email == email) {
        if (customer.password == password) {
          sessionStorage.setItem('userID', customer.id.toString());
          sessionStorage.setItem(
            'creditScore',
            customer.creditScore.toString()
          );
          return true;
        }
        return;
      }
      return;
    });
    console.log(sessionStorage.getItem('userID'));
    if (sessionStorage.getItem('userID') != undefined) {
      return true;
    }
    return false;
  }
}
