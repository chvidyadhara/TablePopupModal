import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataModule } from './userdata/userdata.module';
import { SrvUserService } from './srv-user.service';
import { DatatableModule } from './datatable/datatable.module';
import { FormArrayTableModule } from './form-array-table/form-array-table.module';
import {MatButtonModule, MatFormFieldModule,MatCheckboxModule, MatInputModule} from '@angular/material';
import { UserTableComponent } from './user-table/user-table.component';
import { Formdata2Module } from './formdata2/formdata2.module';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Formdata2Module,
    BrowserAnimationsModule,
    UserdataModule,
    DatatableModule,
  FormArrayTableModule,
  MatButtonModule, MatFormFieldModule,MatCheckboxModule, MatInputModule


  ],
  providers: [SrvUserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
