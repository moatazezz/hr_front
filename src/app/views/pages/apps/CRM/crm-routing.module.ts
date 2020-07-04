import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalespersonComponent } from './salesperson/salesperson.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
    {
        path: 'salesperson',
        component: SalespersonComponent
    },
    {
        path: 'customer',
        component: CustomerComponent

    },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
