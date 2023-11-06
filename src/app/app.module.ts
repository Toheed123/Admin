import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeModule } from './modules/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './modules/sidemenu/sidemenu.component';
import { ListModule } from './modules/list/list.module';
import { pageNotFoundComponent } from './modules/pageNotFound/pageNotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    pageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule, 
    MatIconModule,
    MatSidenavModule,    
    BrowserAnimationsModule, 
    MatToolbarModule,
    ListModule,
  ],
  exports : [
    MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
