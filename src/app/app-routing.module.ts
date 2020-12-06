import { TabsPage } from './Menu/tabs/tabs.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage, children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      
      {
        path: 'home',
        loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./Components/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./Components/signup/signup.module').then( m => m.SignupPageModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
