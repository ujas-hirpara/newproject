import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public myObj: any = []
  public index: any
  public hide: boolean = true
  public opacity:number = 1

  ngOnInit() {
    const list = localStorage.getItem("list");
    if (list) {
      this.myObj = JSON.parse(list);
    }
  }

  constructor(private router: Router, private toaster: ToastrService, public matdialog: MatDialog) {
  }


  //open dialog box for delete to do task
  deletelist(i: any) {
    this.hide = !this.hide
    this.index = i
    this.opacity = 0.6
  }

  //to to task is not deleted 
  nodelete(){
    this.hide = !this.hide
    this.opacity = 1
  }

//to do task is deleted
  detelet(index: any) {
    this.opacity = 1
    const list = localStorage.getItem("list");
    if (list) {
      this.myObj = JSON.parse(list);
    }
    this.myObj.splice(index, 1);
    this.hide = !this.hide
    localStorage.setItem("list", JSON.stringify(this.myObj))
    this.toaster.error('Data deleted successfully', 'DELETE', {
      positionClass: 'toast-top-center'
    });

  }

//clicking on edit btn than routing the form
  edit(id: number) {
    this.router.navigate(["todo", id])
  }
}
