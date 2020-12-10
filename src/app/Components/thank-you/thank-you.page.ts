import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  thankYou(){
    this.router.navigateByUrl('signup');
  }
}
