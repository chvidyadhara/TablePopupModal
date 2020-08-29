import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formdata2arrayComponent } from './formdata2array/formdata2array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [Formdata2arrayComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule 
  ],
  exports:[Formdata2arrayComponent,]
})
export class Formdata2Module { }
