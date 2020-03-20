import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.page.html',
  styleUrls: ['./search-friends.page.scss'],
})
export class SearchFriendsPage implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  onClick() {

  }

}
