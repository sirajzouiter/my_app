import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.scss']
})
export class AccountComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export interface Account {
  intitulé: String;
  debit: Number;
  credit: Number;
}
