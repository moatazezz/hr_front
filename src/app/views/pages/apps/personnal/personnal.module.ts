import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnalRoutingModule } from './personnal-routing.module';
import { PersonnalComponent } from './personnal.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { GradeComponent } from './grade/grade.component';
import { RouterModule } from '@angular/router';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { ProductEditComponent } from '../e-commerce/products/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonnalComponent, DepartmentComponent, EmployeeComponent, GradeComponent],
  entryComponents: [ProductEditComponent],
  imports: [
    CommonModule,
    PersonnalRoutingModule,
    RouterModule,
		 ECommerceModule,
    FormsModule,
  ]
})
export class PersonnalModule { }
