import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private fireLogin: LoginService, private router: Router) { }

  ngOnInit() { }

  singIn() {
    this.fireLogin.singIn(this.user.email, this.user.password);
    // this.fireLogin.singIn(this.user.email, this.user.password)
    //   .then(() => {
    //     this.router.navigate(['/main']);
    //   })
    //   .catch();
  }

}
