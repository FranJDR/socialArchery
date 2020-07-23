import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  email: string = '';
  password: string = '';
  confirm: string = '';

  constructor(
    public userService: UserService,
    public router: Router) { }

  onSubmit() {
    if (this.password == this.confirm) {
      this.userService.singUp(this.email, this.password).then(() => {
        this.router.navigate(['login']);
      });
    } else {
      alert('La contraseña no coincide.');
    }
  }

}
