import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./page/friends/friends.module').then(m => m.FriendsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./page/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./page/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'friend-request',
    loadChildren: () => import('./page/friend-request/friend-request.module').then( m => m.FriendRequestPageModule)
  },
  {
    path: 'search-friends',
    loadChildren: () => import('./page/search-friends/search-friends.module').then( m => m.SearchFriendsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
