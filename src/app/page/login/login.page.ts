import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user = {
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router) { }

  singIn() {
    this.userService.singIn(this.user.email, this.user.password).then(() => {
      this.router.navigate(['main']);
    });
  }

}
