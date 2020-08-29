import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule ,MatFormFieldModule,MatCheckboxModule, MatInputModule,MatRadioModule,MatSelectModule,MatChipsModule, MatIconModule, MatSidenavModule, MatDatepickerToggle} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [FormArrayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
    ,
    MatPaginatorModule,
    MatButtonModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatCheckboxModule, MatInputModule,MatRadioModule,MatSelectModule,MatChipsModule,MatIconModule,MatSidenavModule
  ],
  exports:[FormArrayComponent,MatDatepickerModule,MatDatepickerToggle]
})
export class FormArrayTableModule { }
