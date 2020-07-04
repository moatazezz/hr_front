import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from '../../../../../../../core/personall/defines/services/employee.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '../../../../../../../core/personall/defines/models/employee.model';









@Component({
  selector: 'kt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    list: any [] = [];
    dataSource: MatTableDataSource<Employee>;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    displayedColumns: string[] = ['code', 'nameAr', 'nameEn'];
    constructor(private service: EmployeeService, private cdr: ChangeDetectorRef) {

        //this.refresh()  
        
    }

    ngOnInit() {
        this.refresh()
    }


    refresh() {
        //this.service.getAll().subscribe(data => {
        //    this.list = data["result"];
            
        //    console.log(this.list);
        //    this.dataSource = new MatTableDataSource<Employee>(this.list);
        //    this.cdr.detectChanges();
        //    setTimeout(() => {
        //        this.dataSource.paginator = this.paginator;
        //    }, 0);
        //});
    }
    deleteemployee(index: number, e) {
        if (window.confirm('Are you sure')) {
            const data = this.dataSource.data;
            data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
            this.dataSource.data = data;
            this.service.delete(e.data).subscribe()
        }
    }
}
