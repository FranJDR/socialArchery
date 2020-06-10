import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.page.html',
  styleUrls: ['./search-friends.page.scss'],
})
export class SearchFriendsPage implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService, private fireLogin: LoginService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
      for (let index = 0; index < this.users.length; index++) {
        if (this.users[index].nombre.localeCompare(this.fireLogin.getNameUser()) == 0) {
          this.users.splice(index, 1);
        }
      }
    })
  }

  onClick(uid: string) {
    let aux: any;
    this.userService.getUser(uid).then((res) => {
      aux = res;
    });
  }

}
