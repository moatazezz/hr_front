import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ProductModel, selectProductById, ProductsService } from '../../../../../../core/e-commerce';
import { AppState } from '../../../../../../core/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SubheaderService, LayoutConfigService } from '../../../../../../core/_base/layout';
import { SectortypeService } from '../../../../../../core/personall/defines/services/sectortype.service';
import { Sectortype } from '../../../../../../core/personall/defines/models/sectortype';
import { LayoutUtilsService, TypesUtilsService, MessageType } from '../../../../../../core/_base/crud';

@Component({
  selector: 'kt-sectorsectiontype',
  templateUrl: './sectorsectiontype.component.html',
  styleUrls: ['./sectorsectiontype.component.scss']
})
export class SectorsectiontypeComponent implements OnInit {

  
	dataForm: FormGroup;
	hasFormErrors: boolean = false;
	oldsectortype: Sectortype;
	sector:Sectortype;
	newsectortype : Sectortype;
	getnextcode:"";
	loadingSubject = new BehaviorSubject<boolean>(true);
	loading$: Observable<boolean>;
	private headerMargin: number;
	private componentSubscriptions: Subscription;
	constructor(
	  private activatedRoute: ActivatedRoute,
	private router: Router,
	private store: Store<AppState>,
	private productFB: FormBuilder,
	private cdr: ChangeDetectorRef,
	private subheaderService: SubheaderService,
	private sectortypesservice: SectortypeService,
	private layoutUtilsService: LayoutUtilsService,
	) { 
	  this.newsectortype = 
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
		nameAr:"new",
		nameEn:"جديد",
		Remarks :"",
		notes:"",
		clear() {
		   
		}
	  };
	 
	}
	ngOnInit() {
		  this.sectortypesservice.getCode().subscribe(
		  (data) => {
		   console.log (JSON.stringify(data));
		   this.getnextcode=data["item1"];
		   },
		  (err) => {console.log(err);
		  });
  
		  this.loading$ = this.loadingSubject.asObservable();
		  this.loadingSubject.next(true);
		  this.activatedRoute.params.subscribe(params => {
			  const id = params['code'];
			  if (id && id > 0) {
  
				  this.store.pipe(
				  // 	select(selectProductById(id))
				  ).subscribe(result => {
					  if (!result) {
						  this.loadProductFromService(id);
						  return;
					  }
  
					  this.loadProduct(id);
				   });
			  } else {
				  const newsector = new Sectortype();
				  newsector.clear();
				  this.loadProduct(newsector);
			  }
		  });
  
		  // sticky portlet header 
		  window.onload = () => {
			  const style = getComputedStyle(document.getElementById('kt_header'));
			  this.headerMargin = parseInt(style.height, 0);
		  };
	  }
  
	  loadProduct(_sector, fromService: boolean = false) {
		  if (!_sector) {
			  this.goBack('');
		  }
		  this.sector = _sector;
		  this.oldsectortype = Object.assign({}, _sector);
		  this.initProduct();
		  if (fromService) {
			  this.cdr.detectChanges();
		  }
	  }
  
	  // If product didn't find in store
	  loadProductFromService(productId) {
		  this.sectortypesservice.getByCode(productId).subscribe(res => {
			  this.loadProduct(res, true);
		  });
	  }
  
	  /**
	   * On destroy
	   */
	  ngOnDestroy() {
		  if (this.componentSubscriptions) {
			  this.componentSubscriptions.unsubscribe();
		  }
	  }
  
	  /**
	   * Init product
	   */
	  initProduct() {
		  this.createForm();
		  this.loadingSubject.next(false);
	  }
  
	  /**
	   * Create form
	   */
	  createForm() {
		  this.dataForm = this.productFB.group({
		code: [this.sector.code],
		nameAr: [this.sector.nameAr, Validators.required],
		nameEn: [this.sector.nameEn],
		description: [this.sector.nameEn],
		  });
		
	  }
	  goBack(id) {
		  this.loadingSubject.next(false);
		  const url = `/personall/defines/editvacationtype?code=${id}`;
		  this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	  }
	  goBackWithoutId	() {
		  this.router.navigateByUrl('/personall/defines/mainpage', { relativeTo: this.activatedRoute });
		}
	  
	  prepareProduct(): Sectortype { 
		  const controls = this.dataForm.controls;
		  const _sector = new Sectortype();
		  _sector.code = controls['code'].value;
		  _sector.nameAr = controls['nameAr'].value;
		  _sector.nameEn = controls['nameEn'].value;
		  return _sector;
	  }
	  refreshProduct(isNew: boolean = false, id = 0) {
		  this.loadingSubject.next(false);
		  let url = this.router.url;
		  if (!isNew) {
			  this.router.navigate([url], { relativeTo: this.activatedRoute });
			  return;
		  }
  
		  url = `/personall/defines/editvacationtype/${id}`;
		  this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	  }
	  reset() {
		  this.sector = Object.assign({}, this.oldsectortype);
		  this.createForm();
		  this.hasFormErrors = false;
		  this.dataForm.markAsPristine();
		  this.dataForm.markAsUntouched();
		  this.dataForm.updateValueAndValidity();
	  }
  
	  onSumbit(withBack: boolean = false) {
		  this.hasFormErrors = false;
		  const controls = this.dataForm.controls;
		  /** check form */
		  if (this.dataForm.invalid) {
			  Object.keys(controls).forEach(controlName =>
				  controls[controlName].markAsTouched()
			  );
  
			  this.hasFormErrors = true;
			  //his.selectedTab = 0;
			  return;
		  }
  
		  // tslint:disable-next-line:prefer-const
		  this.newsectortype= this.prepareProduct();
		  this.newsectortype.code = this.getnextcode;
		  console.log(this.newsectortype);
		  this.sectortypesservice.create(this.newsectortype)
			.subscribe( data => {
		  this.router.navigate(['/personall/defines/vacationtypelist']);
		});
  
	  
	  }
  
	  getComponentTitle() {
		  let result = 'new sector type';
		  if (!this.sector || !this.sector.code) {
			  return result;
		  }
  
		  result = `Edit sector - ${this.sector.code} ${this.sector.nameAr}, ${this.sector.nameAr}`;
		  return result;
	  }
  
	
	onAlertClose($event) {
		  this.hasFormErrors = false;
	  }
  
}
