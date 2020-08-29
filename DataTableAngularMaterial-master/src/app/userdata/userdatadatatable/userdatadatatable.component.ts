import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SrvUserService } from 'src/app/srv-user.service';
import { userdata } from 'src/app/userdata';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { TableData } from '../../table-data.model';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-userdatadatatable',
  templateUrl: './userdatadatatable.component.html',
  styleUrls: ['./userdatadatatable.component.css']
}) 
export class UserdatadatatableComponent implements OnInit {
  data: TableData[];
  user:any;

  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = ['id', 'name','email'];
  //displayColumns = ['from', 'to'];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({ users: this.rows });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.data.forEach((d: TableData) => this.addRow(d, true));
    this.updateView();
  }
  // setUsersForm() {
  //     return this.fb.group({
  //       id: '',
  //       name: '',
  //       email: '',
      
  //     });
  //   }
  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }

  addRow(d?: TableData, noUpdate?: boolean) {
    const row = this.fb.group({
      'id'   : [d && d.id ? d.id : null, []],
      'name'     : [d && d.name   ? d.name   : null, []],
      'email'     : [d && d.email   ? d.email   : null, []]
    });
    this.rows.push(row);
    if (!noUpdate) { this.updateView(); }
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }
//   form: FormGroup;
//   users: FormArray;
//   userlist: object;
  
//   ELEMENT_DATA: userdata[];
//   displayedColumns = ['id', 'name', 'email'];
//   // dataSource = new MatTableDataSource(this.ELEMENT_DATA);

//   constructor(private srv: SrvUserService,
//     private formBuilder: FormBuilder,) { }
//   // public userdis() {
//   //   this.srv.servdata().subscribe(report => {
//   //     this.dataSource.data = report as userdata[];
//   //     console.log(JSON.stringify(this.dataSource.data[0].id))

//   //   })
//   // }
//    dataSource = [
//     {id: 1, name: 'Vani', email: "vani@gmail.com"},
//     {id: 2, name: 'Vasu', email: "vasu@gmail.com"},
//     {id: 3, name: 'Likhitha', email: "likki@gmail.com"},
    
//   ];
  
//   ngOnInit() {
//     this.form= this.formBuilder.group({
//       users: this.formBuilder.array([])
//   })
//   this.setUsersForm();
//   this.form.get('users').valueChanges.subscribe(users => {console.log('users', users)});
// }
// private setUsersForm(){
//   const userCtrl = this.form.get('users') as FormArray;
//   this.dataSource.forEach((user)=>{
//     userCtrl.push(this.setUsersFormArray(user))
//   })
// };

// add(){
//   // const userCtrl = this.form.get('users') as FormArray;
// }
// private setUsersFormArray(user){
//  return this.formBuilder.group({
//       id:[user.id],
//       name:[user.name],
//       email:[user.email], 
//   });
// }
    // this.userdis()
  //   this.form= this.formBuilder.group({
  //     users: this.formBuilder.array([])
  // })
    // this.form = this.formBuilder.group({
    //   id: [this.dataSource.data[0].id],
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //  })
  // }

  // setUsersForm(): FormGroup {
  //   return this.formBuilder.group({
  //     id: '',
  //     name: '',
  //     email: '',
    
  //   });
  // }
  // addFieldValue() {
  //   this.users = this.form.get('users') as FormArray;
  //   this.users.push(this.setUsersForm());
  // }


  // get serviceFeeValues(): FormArray {
  //   return this.tableForm.get('users') as FormArray;
  // }

}

