import {vacationtype} from '../../../../../../../core/personall/defines/models/vacationtype';
import {VacationtypeService} from '../../../../../../../core/personall/defines/services/vacationtype.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'kt-listvacationtypes',
  templateUrl: './listvacationtypes.component.html',
  styleUrls: ['./listvacationtypes.component.scss']
})

export class VactiontypeslistComponent implements OnInit {
  vacationtypesdata: any = [];
  dataSource: MatTableDataSource<vacationtype>;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  displayedColumns: string[] = ['code', 'nameAr', 'nameEn', 'IsPayed'];

  constructor(private vacationtypeapi: VacationtypeService) {
    this.vacationtypeapi.getAll().subscribe(data => {
      this.vacationtypesdata = data["result"];
      console.log(this.vacationtypesdata);
      this.dataSource = new MatTableDataSource<vacationtype>(this.vacationtypesdata);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deletevacationtype(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.vacationtypeapi.delete(e.data).subscribe()
    }
  }
 
}