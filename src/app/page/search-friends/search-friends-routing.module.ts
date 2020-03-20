import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFriendsPage } from './search-friends.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFriendsPageRoutingModule {}
