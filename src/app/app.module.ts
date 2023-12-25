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
import { DemoComponent } from './modules/demo/demo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { OrderModule } from './modules/order/order.module';
import { underConstruction } from './modules/underConstruction/underConstruction.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    pageNotFoundComponent,
    DemoComponent,
    underConstruction
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
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    // OrderModule
    // MatMenuModule;
  ],
  exports : [
    MatIconModule,
    MatFormFieldModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
