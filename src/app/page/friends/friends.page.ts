import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllFriends().then(res => {
      this.users = res;
    });
  }

}
