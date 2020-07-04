import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Fake API Angular-in-memory
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Translate Module
import { TranslateModule } from '@ngx-translate/core';
 //NGRX

// UI
import { PartialsModule } from '../../../partials/partials.module';
 //Core
import { FakeApiService } from '../../../../core/_base/layout';
// Auth
import { ModuleGuard } from '../../../../core/auth';

import { PersonallRoutingModule } from './personall-routing.module';
import { PersonallComponent } from './personall.component';
import { MainpageComponent } from './defines/mainpage/mainpage.component';
import { AdministrationandsectionsComponent } from './defines/administrationandsections/administrationandsections.component';
import { SectorsectiontypeComponent } from './defines/sectorsectiontype/sectorsectiontype.component';
import { HttpUtilsService,
	TypesUtilsService,
	InterceptService,
	LayoutUtilsService
} from '../../../../core/_base/crud';
 //Shared
import {
	ActionNotificationComponent,
	DeleteEntityDialogComponent,
	FetchEntityDialogComponent,
	UpdateStatusDialogComponent
} from '../../../partials/content/crud';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatInputModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatDividerModule,
	MatTooltipModule,
    MatSpinner
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import { environment } from '../../../../../environments/environment';
import { CoreModule } from '../../../../core/core.module';
import { NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';
import { EmployeeDataComponent } from './defines/employee_data/employee-data/employee-data.component';
//import { PersonalemployeedataComponent } from './defines/employee_data/personalemployeedata/personalemployeedata.component';
import { JobComponent } from './defines/job/job.component';
import { JobtitleComponent } from './defines/jobtitle/jobtitle.component';
// import { AddvacationtypesComponent } from './defines/vacationtypes/add_vacationtypes/add_vacationtypes.component';
import { VactiontypeslistComponent } from './defines/vacationtypes/listvacationtypes/listvacationtypes.component';


import { QualificationComponent } from './defines/qualification/qualification.component';
import { EducationalOrganizationComponent } from './defines/educational-organization/educational-organization.component';
import { FaculityComponent } from './defines/faculity/faculity.component';
import { DepartmentComponent } from './defines/department/department.component';
import { NationalityComponent } from './defines/nationality/nationality.component';
import { InsuranceofficeComponent } from './defines/insuranceoffice/insuranceoffice.component';
import { SocialstatusComponent } from './defines/socialstatus/socialstatus.component';

import { HealthinsurancecategoriesComponent } from './defines/healthinsurancecategories/healthinsurancecategories.component';
import { TrainingcoursesComponent } from './defines/trainingcourses/trainingcourses.component';

import { IdentificationComponent } from './defines/identification/identification.component';
import { CountryComponent } from './defines/country/country.component';
import { ManagerdirectorComponent } from './defines/managerdirector/managerdirector.component';
import { ContractypesComponent } from './defines/contractypes/contractypes.component';
import { SanctionsComponent } from './defines/sanctions/sanctions.component';
// import { EditVactiontypesComponent } from './defines/vacationtypes/edit-vactiontypes/edit-vactiontypes.component';
import { VacationsComponent } from './defines/vacations/vacations/vacations.component';
import { VactionorderComponent } from './defines/vacations/vactionorder/vactionorder.component';
import { RegistervacationComponent } from './defines/vacations/registervacation/registervacation.component';
import { ReviewordervacationComponent } from './defines/vacations/reviewordervacation/reviewordervacation.component';
import { RegisterrcollectivevacationComponent } from './defines/vacations/registerrcollectivevacation/registerrcollectivevacation.component';
import { OpeningleavebalancesComponent } from './defines/vacations/openingleavebalances/openingleavebalances.component';
import { ImportingleavebalancesComponent } from './defines/vacations/importingleavebalances/importingleavebalances.component';
import { SummaryofmonthlyvacationsComponent } from './defines/vacations/summaryofmonthlyvacations/summaryofmonthlyvacations.component';
import { VacationstockrampingComponent } from './defines/vacations/vacationstockramping/vacationstockramping.component';
import { VacationsettlementComponent } from './defines/vacations/vacationsettlement/vacationsettlement.component';
import { VacationbalancereplacementComponent } from './defines/vacations/vacationbalancereplacement/vacationbalancereplacement.component';
// import { ImportvacationsComponent } from './defines/vacations/importvacations/importvacations.component';
import { EmployeeService } from '../../../../core/personall/defines/services/employee.service';
import { EmployeeListComponent } from './defines/employee_data/employee-list/employee-list.component'

@NgModule({
  declarations: [PersonallComponent, 
	MainpageComponent,
	AdministrationandsectionsComponent,
	SectorsectiontypeComponent, 
	EmployeeDataComponent,  
	JobComponent, 
	JobtitleComponent,
	QualificationComponent,
	EducationalOrganizationComponent,
	FaculityComponent,
	DepartmentComponent,
	NationalityComponent, 
	InsuranceofficeComponent,
	SocialstatusComponent,
	HealthinsurancecategoriesComponent,
	TrainingcoursesComponent,
	IdentificationComponent,
	CountryComponent,
	ManagerdirectorComponent,
	ContractypesComponent,
	SanctionsComponent,
	 
	VactiontypeslistComponent, VacationsComponent, VactionorderComponent, RegistervacationComponent, ReviewordervacationComponent, RegisterrcollectivevacationComponent, OpeningleavebalancesComponent, ImportingleavebalancesComponent, SummaryofmonthlyvacationsComponent, VacationstockrampingComponent, VacationsettlementComponent, VacationbalancereplacementComponent, EmployeeListComponent],
    imports: [
    CommonModule,
	PersonallRoutingModule,
	RouterModule,
    FormsModule,
     HttpClientModule,
	 	PartialsModule,
	 	NgxPermissionsModule.forChild(),
     MatDialogModule,
		
	 	ReactiveFormsModule,
	 	TranslateModule.forChild(),
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
	 	MatCardModule,
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
	 	environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forFeature(FakeApiService, {
	 		passThruUnknownUrl: true,
         	dataEncapsulation: false
	 	}) : [],
  ],
    providers: [
        EmployeeService,
 		ModuleGuard,
        InterceptService,
        DatePipe,
       	{
         	provide: HTTP_INTERCEPTORS,
        	 	useClass: InterceptService,
         	multi: true
       	},
 		{
 			provide: MAT_DIALOG_DEFAULT_OPTIONS,
 			useValue: {
 				hasBackdrop: true,
 				panelClass: 'kt-mat-dialog-container__wrapper',
 				height: 'auto',
 				width: '900px'
 			}
 		},
 		TypesUtilsService,
 		LayoutUtilsService,
 		HttpUtilsService,
 		TypesUtilsService,
 		LayoutUtilsService
   ],
   entryComponents: [
 		ActionNotificationComponent,
 		DeleteEntityDialogComponent,
 		FetchEntityDialogComponent,
 		UpdateStatusDialogComponent,
 	],
  
})
export class PersonallModule { }
