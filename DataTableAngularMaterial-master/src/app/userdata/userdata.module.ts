import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdatadatatableComponent } from './userdatadatatable/userdatadatatable.component';
import { MatTableModule }  from '@angular/material/table';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [UserdatadatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  exports:[UserdatadatatableComponent] 
})
export class UserdataModule { }
