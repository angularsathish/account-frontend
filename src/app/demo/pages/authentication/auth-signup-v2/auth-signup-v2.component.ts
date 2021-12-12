import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup-v2',
  templateUrl: './auth-signup-v2.component.html',
  styleUrls: ['./auth-signup-v2.component.scss'],
})
export class AuthSignupV2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    sessionStorage.setItem('token', 'true');
    this.router.navigate(['/dashboard/default']);
  }
}
