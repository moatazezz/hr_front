import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CountrysComponent } from './countrys.component';
import { CountrysRoutingModule } from './countrys-routing.module';
import { GetallcountriesComponent } from './getallcountries/getallcountries.component';
import { RouterModule } from '@angular/router';
import { EditcountryComponent } from './editcountry/editcountry.component';
import { FormsModule } from '@angular/forms';
import { AddcountryComponent } from './addcountry/addcountry.component';


@NgModule({
  declarations: [CountrysComponent, GetallcountriesComponent, EditcountryComponent, AddcountryComponent],
  imports: [
    CommonModule,
    CountrysRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class CountrysModule { }
