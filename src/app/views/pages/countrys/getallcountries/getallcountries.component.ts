import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
// import { Countries } from 'src/app/core/country/models/countries';
import { CountryService,Countries} from './../../../../core/country';

@Component({
  selector: 'kt-getallcountries',
  templateUrl: './getallcountries.component.html',
  styleUrls: ['./getallcountries.component.scss']
})
export class GetallcountriesComponent implements OnInit {

  countrylistasobject:object;
  countrylist:Countries[];
  constructor(private countryService:CountryService,private router: Router) { }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.countrylistasobject = data;
      this.countrylist = this.countrylistasobject["result"];

      console.log(this.countrylist);
    },
      (err) => {
        console.log(err)
      }
    );
  }
  Deletecountry(country:Countries)
  {
    this.countryService.deleteCountry(country).subscribe(
      (result => 
        {this.ngOnInit()}),
    (error => console.log(error))
    );

                           }

}
