import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
