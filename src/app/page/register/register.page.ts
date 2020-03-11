import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';
  confirm: string = '';

  constructor(public register: RegisterService, public router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    if(this.password == this.confirm) {
      this.register.singUp(this.email,this.password).then(()=>{
        this.router.navigate(['login']);
      });
    }else{
      alert('La contraseña no coincide.');
    }
  }

}
