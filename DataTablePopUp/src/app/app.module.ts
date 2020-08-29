import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DemoMaterialModule} from './material-module';
import {UserdataModule} from './userdata/userdata.module';
import {SrvUserService} from './srv-user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    UserdataModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [SrvUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
