import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
@Input() buttonValue:any
constructor(private route: ActivatedRoute, private router: Router,private toaster:ToastrService){

}
public selectedid:any;
public currentData:any;
public newTitle:any
public newDes:any
public newStatus:any
public newEdate:any
public newSdate:any
 value = "Submit"

public myObj:any = [];

//this function define the adding and updating functionality
 getdata(data:any){
  const list = localStorage.getItem("list");
  if(list){
   this.myObj = JSON.parse(list)
  }
  this.myObj.push(data);
  localStorage.setItem("list",JSON.stringify(this.myObj))
  
  if(this.selectedid){
    this.myObj.splice(this.selectedid, 1)
    localStorage.setItem("list",JSON.stringify(this.myObj))
    this.toaster.success('Data updated successfully', 'UPDATE', {
      positionClass: 'toast-top-center' 
   });
  }
  else{
    this.toaster.success('Data added successfully', 'ADDED', {
      positionClass: 'toast-top-center' 
   });  }
  
  this.router.navigate([""])
 }

 //id stored as a variable(selectedid) for the edit functionality and fetch todo data in the form
ngOnInit(){
  const list = localStorage.getItem("list");
  if(list){
   this.myObj = JSON.parse(list)
  };
  
this.route.paramMap.subscribe(
  params => {
    this.selectedid = params.get('id');
  }

);
if(this.selectedid){
this.currentData = this.myObj[this.selectedid];
// this.todoform.get('title')?.setValue(this.currentData.title)
 this.newTitle = this.currentData.title
 this.newDes = this.currentData.textarea
 this.newStatus = this.currentData.status
 this.newEdate = this.currentData.edate
 this.newSdate = this.currentData.sdate
 
 this.value = "Update"
}
}

}
