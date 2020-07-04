import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonallComponent } from './personall.component';
import { MainpageComponent } from './defines/mainpage/mainpage.component';
import { AdministrationandsectionsComponent } from './defines/administrationandsections/administrationandsections.component';
import { SectorsectiontypeComponent } from './defines/sectorsectiontype/sectorsectiontype.component';
import { EmployeeDataComponent } from './defines/employee_data/employee-data/employee-data.component';
// import { PersonalemployeedataComponent } from './defines/employee_data/personalemployeedata/personalemployeedata.component';
import { JobComponent } from './defines/job/job.component';
import { JobtitleComponent } from './defines/jobtitle/jobtitle.component';
import { VactiontypeslistComponent } from './defines/vacationtypes/listvacationtypes/listvacationtypes.component';
// import { AddvacationtypesComponent } from './defines/vacationtypes/add_vacationtypes/add_vacationtypes.component';
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
//import { ImportvacationsComponent } from './defines/vacations/importvacations/importvacations.component';



const routes: Routes = [
  { path: '', component: PersonallComponent ,
  children: [
    {
      path: '',
      redirectTo: 'defines/mainpage',
      pathMatch: 'full'
    },
    {
      path: 'defines/mainpage',
      component: MainpageComponent
    },
    {
      path: 'defines/administrationandsections',
      component: AdministrationandsectionsComponent
    },
    {
      path: 'defines/sectorsectiontype',
      component: SectorsectiontypeComponent
    },
    {
      path: 'defines/employeeData/:id',
      component: EmployeeDataComponent
    },
    
    {
      path: 'defines/job',
      component: JobComponent
    },
    {
      path: 'defines/jobtittle',
      component: JobtitleComponent
    },
    
   
    
    {
      path: 'defines/vacationtypelist',
      component: VactiontypeslistComponent
    },
    {
      path: 'defines/qualification',
      component: QualificationComponent
    },
    {
      path: 'defines/educationalorganization',
      component: EducationalOrganizationComponent
    },
    {
      path: 'defines/faculity',
      component: FaculityComponent
    },
    {
      path: 'defines/department',
      component: DepartmentComponent
    },
    {
      path: 'defines/nationality',
      component: NationalityComponent
    },
    {
      path: 'defines/insuranceoffice',
      component: InsuranceofficeComponent
    },
    {
      path: 'defines/socialstatus',
      component: SocialstatusComponent
    },
    {
      path: 'defines/identification',
      component: IdentificationComponent
    },
    {
      path: 'defines/healthinsurancecategories',
      component: HealthinsurancecategoriesComponent
    },
    {
      path: 'defines/trainingcourses',
      component: TrainingcoursesComponent
    },
    {
      path: 'defines/country',
      component: CountryComponent
    },
    {
      path: 'defines/managerdirector',
      component: ManagerdirectorComponent
    },
    {
      path: 'defines/sanction',
      component: SanctionsComponent
    },
    {
      path: 'defines/contractypes',
      component: ContractypesComponent
    },
    {
      path: 'defines/vactions',
      component: VacationsComponent
    },
    {
      path: 'defines/vactions/vacationorder',
      component: VactionorderComponent
    },
    {
      path: 'defines/vactions/registervacation',
      component: RegistervacationComponent
    },
    {
      path: 'defines/vactions/reviewvacationorder',
      component: ReviewordervacationComponent
    },
    {
      path: 'defines/vactions/registerrcollectivevacation',
      component: RegisterrcollectivevacationComponent
    },
    {
      path: 'defines/vactions/openingleavebalances',
      component: OpeningleavebalancesComponent
    },
    {
      path: 'defines/vactions/importingleavebalances',
      component: ImportingleavebalancesComponent
    },
    {
      path: 'defines/vactions/summaryofmonthlyvacations',
      component: SummaryofmonthlyvacationsComponent
    },
    {
      path: 'defines/vactions/vacationstockramping',
      component: VacationstockrampingComponent
    },
    {
      path: 'defines/vactions/vacationsettlement',
      component: VacationsettlementComponent
    },
    {
      path: 'defines/vactions/vacationbalancereplacement',
      component: VacationbalancereplacementComponent
    },
    


  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonallRoutingModule { }
