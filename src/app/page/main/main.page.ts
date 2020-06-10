import { MenuConfig } from './../../models/menuConfig';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  menus: MenuConfig[] = [];
  nameUser: string = "";

  constructor(private fireLogin: LoginService) {
    this.nameUser = this.fireLogin.getNameUser();
    this.menus.push(new MenuConfig('Mis Tablillas de Puntuacion', '/friend-request', 'barbell-outline'));
    this.menus.push(new MenuConfig('Amigos', '/friends', 'people-circle-outline'));
    this.menus.push(new MenuConfig('Buscar Amigos', '/search-friends', 'body-outline'));
    this.menus.push(new MenuConfig('Solicitudes de Amistad', '/friend-request', 'body-outline'));
    // this.menus.push(new MenuConfig('Cerrar Sesion', '/main', 'log-out-outline'));
  }

  public disconnect() {
    this.fireLogin.signOut();
  }

  ngOnInit() { }

}

