import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFriendsPageRoutingModule } from './search-friends-routing.module';

import { SearchFriendsPage } from './search-friends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFriendsPageRoutingModule
  ],
  declarations: [SearchFriendsPage]
})
export class SearchFriendsPageModule {}
