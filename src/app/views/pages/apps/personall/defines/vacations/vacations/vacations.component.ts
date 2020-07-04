import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
  }

  goBackWithoutId	() {
    this.router.navigateByUrl('/personall/defines/mainpage', { relativeTo: this.activatedRoute });
  }

}
