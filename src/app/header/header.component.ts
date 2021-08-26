import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userID?: number;
  constructor() {}

  ngOnInit(): void {
    let id = sessionStorage.getItem('userID');
    if (id != null && id != undefined) {
      this.userID = parseInt(id);
    }
  }
}
