import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {InvoiceComponent} from './components/invoice/invoice.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: InvoiceComponent}
    ]

  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: false,
      anchorScrolling: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
