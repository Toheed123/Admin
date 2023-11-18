import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './list/product-list.component';
import {CurrencyPipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatTableModule,
    CurrencyPipe
  ]
})
export class ProductModule { }
