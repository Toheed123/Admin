import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material'

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    // CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule, 
    // MatIconModule,
    MatSidenavModule,    
    // BrowserAnimationsModule,
    // MatFormFieldModule
  ]
})
export class HomeModule { }
