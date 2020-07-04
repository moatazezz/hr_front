import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrysComponent } from './countrys.component';
import { GetallcountriesComponent } from './getallcountries/getallcountries.component';
import { EditcountryComponent } from './editcountry/editcountry.component';
import { AddcountryComponent } from './addcountry/addcountry.component';

const routes: Routes = [
  { path: '', component: CountrysComponent ,
  children: [
  {
    path: '',
    redirectTo: 'allcountries',
    pathMatch: 'full'
  },
  {
    path: 'allcountries',
    component: GetallcountriesComponent
  },
  {
    path: 'editcountry/:code',
    component: EditcountryComponent
  },
  {
    path: 'addcountry',
    component: AddcountryComponent
  }
],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrysRoutingModule { }
