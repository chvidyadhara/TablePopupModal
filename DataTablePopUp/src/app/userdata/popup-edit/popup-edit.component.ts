import { Component,OnInit,Inject } from '@angular/core';

import { userdata } from 'src/app/userdata';import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-edit',
  templateUrl: './popup-edit.component.html',
  styleUrls: ['./popup-edit.component.css']
})
export class PopupEditComponent implements OnInit {
  action:string;
  local_data:any;  
   

    
    constructor(public dialogRef: MatDialogRef<PopupEditComponent>, @Inject(MAT_DIALOG_DATA) public data: userdata){
      this.local_data = {...data}; 
      this.action = this.local_data.action;
    } 
   
    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
  
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }
  
    ngOnInit(): void {
    }
  
  }
  



