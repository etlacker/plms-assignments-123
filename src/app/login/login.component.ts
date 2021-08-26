import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  onSubmitData(contactForm: any) {
    // console.log(contactForm.value.email);
    let loginCorrect = this.loginService.verifyLogin(
      contactForm.value.email,
      contactForm.value.password
    );
    if (loginCorrect) {
      console.log('Success');
    } else {
      console.log('fail');
    }
    this.cdRef.detectChanges();
  }
}
