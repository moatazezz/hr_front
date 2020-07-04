import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../../../../core/reducers';
import { ProductModel, selectProductById, ProductsService } from '../../../../../../../core/e-commerce';
import { Observable,of, BehaviorSubject, Subscription } from 'rxjs';
import { SubheaderService, LayoutConfigService } from '../../../../../../../core/_base/layout';
import { EmployeeService } from '../../../../../../../core/personall/defines/services/employee.service';
//import { PersonalemployeedataComponent } from '../personalemployeedata/personalemployeedata.component';
import { MatTabGroup } from '@angular/material';
import { Employee } from '../../../../../../../core/personall/defines/models/employee.model';
import { ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
@Component({
  selector: 'kt-employee-data',
  templateUrl: './employee-data.component.html',
    styleUrls: ['./employee-data.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EmployeeDataComponent implements OnInit {
    @ViewChild("tabgroup", { static: false }) tabgroup: MatTabGroup;
    id;
    emplist;
    emp;
    isLoading;
    private sub: any;
  
    constructor(
    private route: ActivatedRoute,
    private service: EmployeeService,
        private fb: FormBuilder,
        private _cdr: ChangeDetectorRef,
		private datePipe: DatePipe
    ) { 
    }

    ngAfterContentChecked(): void {
		
			this.sub = this.route.params.subscribe(params => {
                this.id = +params['id'];
                if (this.tabgroup != undefined)
                    this.tabgroup.selectedIndex = this.id - 1;
            });
       // this.refresh();
		
    }
    refresh() {
        this.isLoading = true;
        console.log("true ",this.isLoading); 
        this.service.getAll()
        .subscribe(
            data => {
                this.isLoading = false;
                this.emplist.controls['empDetail'].clear();
      
                for (let item of data["result"])
                {

                    this.emplist.controls['empDetail'].push(this.fb.group({
                        id: item.id,
                        code: item.code,
                        nameAr: item.nameAr,
                        nameEn: item.nameEn,
                        birthDate: this.datePipe.transform(item.birthDate, 'dd-MM-yyyy') 
                    }));
                    console.log("item.namear", item.nameAr);
                   
                }
                this._cdr.detectChanges();
                console.log(this.isLoading);
                //console.log(this.emplist); 
            });
    }
    ngOnInit() {
        
        this.emplist = this.fb.group({
            empDetail: this.fb.array([])
        });
        this.emp = this.fb.group({
            id: [''],
            code: [''],
            nameAr: [''],
            nameEn: [''],
            birthDate: ['']
        });
        this.refresh();
        this.clear();
       
    } 
    edit(code) {
       // alert('ok');
        
        this.service.getByCode(code)
            .subscribe(
                data => {
                    this.emp = this.fb.group({
                        id: data.id,
                        code: data.code,
                        nameAr: data.nameAr,
                        nameEn: data.nameEn,
                        birthDate: formatDate(data.birthDate, 'yyyy-MM-dd', 'en')
                    })
                    console.log("emp ", data.id);
                    this._cdr.detectChanges();
                });

    }
    save() {
        
        if (this.emp.value.id == '' || this.emp.value.id == null) {
            let employee = {
                code: this.emp.value.code,
                nameAr: this.emp.value.nameAr,
                nameEn: this.emp.value.nameEn,
                birthDate: this.emp.value.birthDate
            }
            this.service.create(employee)
                .subscribe(data => {
                    this.refresh();
                    this.clear();
                }
                    , error => { alert('error') }
                );
        }
        else {
            this.service.update(this.emp.value)
                .subscribe(data => {
                    this.refresh();
                    this.clear();
                }
                    , error => { alert('error') }
                );
        }
    }
    clear() {
        this.emp.reset();
        this.service.getCode()
            .subscribe(data => {
                this.emp.patchValue({ code: data["item1"] } );
                console.log('code ', this.emp.value.code)
                this._cdr.detectChanges();
            })
        
    }

}
