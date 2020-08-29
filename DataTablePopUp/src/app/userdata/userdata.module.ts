import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdatadatatableComponent } from './userdatadatatable/userdatadatatable.component';
import { MatTableModule }  from '@angular/material/table';
import {HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { PopupEditComponent } from './popup-edit/popup-edit.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [UserdatadatatableComponent,PopupEditComponent],
  imports: [
    CommonModule,
    MatTableModule, 
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[UserdatadatatableComponent]
})
export class UserdataModule { }
 