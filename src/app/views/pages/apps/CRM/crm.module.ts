import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRMRoutingModule } from './crm-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalespersonComponent } from './salesperson/salesperson.component';
import { MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatMenuModule, MatSelectModule, MatInputModule, MatTableModule, MatAutocompleteModule, MatRadioModule, MatIconModule, MatNativeDateModule, MatProgressBarModule, MatDatepickerModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule, MatTabsModule, MatTooltipModule, MatDividerModule } from '@angular/material';
import { CustomerComponent } from './customer/customer.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
    declarations: [

        SalespersonComponent,

        CustomerComponent],
    imports: [
        CommonModule,
        CRMRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatCardModule,

        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatDatepickerModule,
        
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        MatDividerModule,
        NgbProgressbarModule,
        FlexLayoutModule,

    ]
})
export class CRMModule { }
