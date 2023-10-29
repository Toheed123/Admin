import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarRoutingModule } from './sidebar-routing.module';
import { SideBarComponent } from './sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    ReactiveFormsModule, 
    MatIconModule
  ]
})
export class SidebarModule { }
