import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ProductModel, selectProductById, ProductsService } from '../../../../../../../core/e-commerce';
import { AppState } from '../../../../../../../core/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SubheaderService, LayoutConfigService } from '../../../../../../../core/_base/layout';


@Component({
  selector: 'kt-vacationstockramping',
  templateUrl: './vacationstockramping.component.html',
  styleUrls: ['./vacationstockramping.component.scss']
})
export class VacationstockrampingComponent implements OnInit {

  dataForm: FormGroup;
  hasFormErrors: boolean = false;
  product:ProductModel;
  loadingSubject = new BehaviorSubject<boolean>(true);
  loading$: Observable<boolean>;
  private headerMargin: number;
  private componentSubscriptions: Subscription;
  AVAILABLE_VACATIONTYPE: string[];
  greatervalue1:boolean=false;
  smallervalue1:boolean=false;
  greatervalue2:boolean=false;
  smallervalue2:boolean=false;
  AVAILABLE_ADMINISTRATOR: string[];
  AVAILABLE_DEPARTMENT: string[];
  AVAILABLE_EMPLOYEE: string[];
  constructor(
	private activatedRoute: ActivatedRoute,
  private router: Router,
  private store: Store<AppState>,
  private productFB: FormBuilder,
  private cdr: ChangeDetectorRef,
  private productService: ProductsService,
  private subheaderService: SubheaderService,
  ) { 
    
   
  }
  onSelectionChange1()
  {
	  
	  const controls = this.dataForm.controls;
	  console.log(controls['yearservice'].value)
	  if(controls['yearservice'].value==0)
	  {
		  this.greatervalue1=true;
	  }
	  else{
		  this.greatervalue1=false;
	  }
	  if(controls['yearservice'].value==1)
	  {
		  this.smallervalue1=true;
	  }
	  else{
		  this.smallervalue1=false;
	  }
	  
  
  }
  onSelectionChange2()
  {
	  
	  const controls = this.dataForm.controls;
	  console.log(controls['yearservice'].value)
	  if(controls['yearservice'].value==0)
	  {
		  this.greatervalue2=true;
	  }
	  else{
		  this.greatervalue2=false;
	  }
	  if(controls['yearservice'].value==1)
	  {
		  this.smallervalue2=true;
	  }
	  else{
		  this.smallervalue2=false;
	  }
	  
  
  }
  ngOnInit() {
	this.AVAILABLE_VACATIONTYPE=['Casual Vacation','Sick Vacation','Opening Vacation'];
	this.AVAILABLE_ADMINISTRATOR=['ONE','TWO','THREE'];
  this.AVAILABLE_DEPARTMENT=['ONE','TWO','THREE'];
  this.AVAILABLE_EMPLOYEE=['KKK','MM','SSS'];
		this.loading$ = this.loadingSubject.asObservable();
		this.loadingSubject.next(true);
		this.activatedRoute.params.subscribe(params => {
			const id = params['id'];
			if (id && id > 0) {

				this.store.pipe(
					select(selectProductById(id))
				).subscribe(result => {
					if (!result) {
						this.loadProductFromService(id);
						return;
					}

					this.loadProduct(result);
				});
			} else {
				const newProduct = new ProductModel();
				newProduct.clear();
				this.loadProduct(newProduct);
			}
		});

		// sticky portlet header 
		window.onload = () => {
			const style = getComputedStyle(document.getElementById('kt_header'));
			this.headerMargin = parseInt(style.height, 0);
		};
	}

	loadProduct(_product, fromService: boolean = false) {
		if (!_product) {
			this.goBack('');
		}
		this.product = _product;
		this.initProduct();
		if (fromService) {
			this.cdr.detectChanges();
		}
	}

	// If product didn't find in store
	loadProductFromService(productId) {
		this.productService.getProductById(productId).subscribe(res => {
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
		hiringdate: [this.product.model],
		age: [this.product.model],
		writeage: [this.product.model],
		yearservice: [this.product.model],
		yearofservicegreater: [this.product.model],
		yearofservicesmaller: [this.product.model],
		mounthservice: [this.product.model],
		mounthofservicegreater: [this.product.model],
		mounthofservicesmaller: [this.product.model],
		administrativestructureliquidation: [this.product.model],
		employee: [this.product.model],
		AddingNumberday: [this.product.model],
		editreason:[this.product.model],
		filtertype:[this.product.model],
		});
      
	}
  goBack(id) {
		this.loadingSubject.next(false);
		const url = `/ecommerce/products?id=${id}`;
		this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	}
 
	getComponentTitle() {
		let result = 'New Vacation Stock Ramping';
		if (!this.product || !this.product.id) {
			return result;
		}

		result = `Edit product - ${this.product.manufacture} ${this.product.model}, ${this.product.modelYear}`;
		return result;
	}

  goBackWithoutId	() {
    this.router.navigateByUrl('/personall/defines/vactions', { relativeTo: this.activatedRoute });
  }

  onAlertClose($event) {
		this.hasFormErrors = false;
	}

}