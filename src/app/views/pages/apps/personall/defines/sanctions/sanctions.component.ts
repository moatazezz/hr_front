import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ProductModel, selectProductById, ProductsService } from '../../../../../../core/e-commerce';
import { AppState } from '../../../../../../core/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SubheaderService, LayoutConfigService } from '../../../../../../core/_base/layout';


@Component({
  selector: 'kt-sanctions',
  templateUrl: './sanctions.component.html',
  styleUrls: ['./sanctions.component.scss']
})
export class SanctionsComponent implements OnInit{

  dataForm: FormGroup;
  hasFormErrors: boolean = false;
  product:ProductModel;
  loadingSubject = new BehaviorSubject<boolean>(true);
  loading$: Observable<boolean>;
  private headerMargin: number;
  private componentSubscriptions: Subscription;
  AVAILABLE_DISCOUNTTYPE: string[];
  AVAILABLE_APPLYDISCOUNT: string[];
  AVAILABLE_DISCOUNTFFIRSTTIMEFOR: string[];
  Fixedvalue:boolean=false;
  Fixedvalue1:boolean=false;
  Numberofdays:boolean=false;

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
  selected()
	{
		//console.log(this.selectedLevel)
		const controls = this.dataForm.controls;
		if(controls['discounttype'].value =='fixed')
		{
			this.Fixedvalue=true;
		}
		else{
			this.Fixedvalue=false;
		}
	
	}
	selected1()
	{
		//console.log(this.selectedLevel1)
		const controls = this.dataForm.controls;
		if(controls['discountfristtimefor'].value =='Discount value')
		{
			this.Fixedvalue1=true;
		}
		else{
			this.Fixedvalue1=false;
		}
		if(controls['discountfristtimefor'].value =='Discount ratio')
		{
			this.Numberofdays=true;
		}
		else{
			this.Numberofdays=false;
		}
	
	}
  ngOnInit() {
	
	this.AVAILABLE_DISCOUNTTYPE=['fixed','unfixed'];
	this.AVAILABLE_APPLYDISCOUNT=['Yearly','Monthly','from hire date'];
	this.AVAILABLE_DISCOUNTFFIRSTTIMEFOR=['Oral warning','drew attention','Discount value','Discount ratio','Dismissed from the company'];
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
		Code: [this.product.VINCode],
    descriptionAr: [this.product.model],
	  descriptionEn: [this.product.model],
	  articlenumber: [this.product.model],
	  descriptionmaterial: [this.product.model],
	  discounttype: [this.product.model],
	  fixedvalue: [this.product.model],
	  applydiscount: [this.product.model],
	  discountfristtimefor: [this.product.model],
	  discountvalueforFixedValue: [this.product.model],
	  daynumbers: [this.product.model],
	 
		});
      
	}
  goBack(id) {
		this.loadingSubject.next(false);
		const url = `/ecommerce/products?id=${id}`;
		this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	}
 
	getComponentTitle() {
		let result = 'new sanction';
		if (!this.product || !this.product.id) {
			return result;
		}

		result = `Edit product - ${this.product.manufacture} ${this.product.model}, ${this.product.modelYear}`;
		return result;
	}

  goBackWithoutId	() {
    this.router.navigateByUrl('/personall/defines/mainpage', { relativeTo: this.activatedRoute });
  }

  onAlertClose($event) {
		this.hasFormErrors = false;
	}

}
