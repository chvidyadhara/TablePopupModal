import { Component, OnInit, Inject ,ViewChild } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
import {MatSort} from '@angular/material/sort';
import { SrvUserService } from 'src/app/srv-user.service';
import { userdata } from 'src/app/userdata';
import {MatDialog} from '@angular/material/dialog';
import { PopupEditComponent } from '../popup-edit/popup-edit.component';

@Component({
  selector: 'app-userdatadatatable',
  templateUrl: './userdatadatatable.component.html',
  styleUrls: ['./userdatadatatable.component.css']
})
export class UserdatadatatableComponent implements OnInit {
  userlist: object;
  ELEMENT_DATA: userdata[];
  displayedColumns = ['id', 'name', 'email','action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  userdataupdate:any;
  constructor(private srv: SrvUserService,public dialog: MatDialog) { }
  public userdis() {
    this.srv.servdata().subscribe(report => {
      this.dataSource.data = report as userdata[];
      this.userdataupdate = report;
    })
   }
  
  ngOnInit() {
    this.userdis()
  }

  
  
   openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(PopupEditComponent,{
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => { 
       if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  
  updateRowData(row_obj){
    this.dataSource = this.userdataupdate.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
      });
  }
  deleteRowData(row_obj){
    this.dataSource = this.userdataupdate.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}



// @Component({
//   selector: 'display-popup',
//   templateUrl: 'display-popup.html',
// })


// export class DialogElementsExampleDialog {
//   action:string;
//   local_data:any;
  
//   constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>,@Optional@Inject (MAT_DIALOG_DATA) public data: userdata){
//     this.local_data = {...data};
//     this.action = this.local_data.action;
//   } 
 
//   doAction(){
//     this.dialogRef.close({event:this.action,data:this.local_data});
//   }

//   closeDialog(){
//     this.dialogRef.close({event:'Cancel'});
//   }


// }
