import { Component, OnInit } from '@angular/core';
import { CountryService,Countries} from './../../../../core/country';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kt-editcountry',
  templateUrl: './editcountry.component.html',
  styleUrls: ['./editcountry.component.scss']
})
export class EditcountryComponent implements OnInit {

  public Country: Countries;
  constructor(private countryservice:CountryService,
    private activatedRoute: ActivatedRoute,
      private router: Router,
    ) {
      this.Country = 
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
      const code = this.activatedRoute.snapshot.params['code'];
      this.countryservice.getCountryByCode(code).subscribe(
        (data => { this.Country = data;
          console.log(this.Country);
        }),
        (err => { console.log(err); }));
  
        
  }
Updatecountry(country: Countries) {
  this.countryservice.upCountry(country).subscribe(
    (result => this.router.navigate(['/country'])),
    (error => console.log(error))
  );
  }

}
