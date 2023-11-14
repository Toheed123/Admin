import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { pageNotFoundComponent } from './modules/pageNotFound/pageNotFound.component';
import { DemoComponent } from './modules/demo/demo.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path : 'demo' , component: DemoComponent},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)},
  { path: 'list',  loadChildren : () => import('./modules/list/list.module').then(m => m.ListModule)},
  { path : 'dashboard', loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},

  //if url not found or match

  { path: '' , redirectTo : "/home", pathMatch:'full'},
  {path: '**' , component: pageNotFoundComponent},
  { path: '404-nit-found' , component : pageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
