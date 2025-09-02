import { Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component'
import {LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'accounts', component: AccountsComponent },
     { path: 'account-detail/:actionText', component: AccountDetailComponent },
    { path: '**', redirectTo: '' }
];
