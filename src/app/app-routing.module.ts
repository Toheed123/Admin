import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  {  path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)},
  { path: 'sidebar', loadChildren: () => import( './modules/sidebar/sidebar.module').then( m=> m.SidebarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
