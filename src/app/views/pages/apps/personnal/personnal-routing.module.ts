import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnalComponent } from './personnal.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { GradeComponent } from './grade/grade.component';
import { ProductEditComponent } from '../e-commerce/products/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: PersonnalComponent,
  children: [
  {
    path: '',
    redirectTo: 'Department',
    pathMatch: 'full'
  },
  {
    path: 'Department',
    component: DepartmentComponent
  },
  {
    path: 'Employee',
    component: ProductEditComponent
  },
  {
    path: 'Grade',
    component: GradeComponent
  }
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnalRoutingModule { }
