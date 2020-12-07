import { TabsPage } from './Menu/tabs/tabs.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage, children: [
      
      {
        path: 'home',
        loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./Components/cart/cart.module').then( m => m.CartPageModule)
      },

    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./Components/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'cash',
    loadChildren: () => import('./Components/cash/cash.module').then( m => m.CashPageModule)
  },
  {
    path: 'credit',
    loadChildren: () => import('./Components/credit/credit.module').then( m => m.CreditPageModule)
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./Components/signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'address',
    loadChildren: () => import('./Components/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./Components/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
