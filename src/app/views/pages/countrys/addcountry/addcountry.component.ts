import { Component, OnInit } from '@angular/core';
import { CountryService,Countries} from './../../../../core/country';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.scss']
})
export class AddcountryComponent implements OnInit {

  newcountry: Countries;
  getnextcode:string;
  constructor(private countryservice:CountryService
    , private router: Router) {
   this.newcountry = 
    {
      code:"",
      remarks:"",
      isActive:null,
      addBy:null,
      addTime:null,
      editBy:null,
      editdate:null,
      deleteBy:null,
      deleteDate:null,
      flgDelete:null,
      nameAr:"",
      nameEn:""
    };
  }
ngOnInit() {
  this.countryservice.getCode().subscribe(
    (data) => {
     console.log (JSON.stringify(data));
     this.getnextcode=data["item1"];
     },
    (err) => {console.log(err);
    });

}
Savecountry()
{
  // ev.preventDefault();
  //console.log(JSON.stringify(this.newPrd));
this.newcountry.code=this.getnextcode;
  this.countryservice.insertCountry(this.newcountry)
  .subscribe(
    (data) => {
      this.router.navigate(['/country'])
     console.log (JSON.stringify(data));
     },
    (err) => {console.log(err);
    });
}

}
