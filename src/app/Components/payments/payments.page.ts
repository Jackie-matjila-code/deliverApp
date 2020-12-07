import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
credit(){
this.router.navigateByUrl('credit');
}
cash(){
  this.router.navigateByUrl('address');
}
}
