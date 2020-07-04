import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';

import { ProductModel, selectProductById, ProductsService } from '../../../../../../core/e-commerce';
import { AppState } from '../../../../../../core/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SubheaderService, LayoutConfigService } from '../../../../../../core/_base/layout';


@Component({
  selector: 'kt-contractypes',
  templateUrl: './contractypes.component.html',
  styleUrls: ['./contractypes.component.scss']
})
export class ContractypesComponent implements OnInit {

  dataForm: FormGroup;
  hasFormErrors: boolean = false;
  product:ProductModel;
  loadingSubject = new BehaviorSubject<boolean>(true);
  loading$: Observable<boolean>;
  private headerMargin: number;
  private componentSubscriptions: Subscription;
   Mounthlyvalue:boolean=false;
   Yearlyvalue:boolean=false;
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
  onSelectionChange()
	{
		
		const controls = this.dataForm.controls;
		console.log(controls['period'].value)
		if(controls['period'].value==0)
		{
			this.Mounthlyvalue=true;
		}
		else{
			this.Mounthlyvalue=false;
		}
		if(controls['period'].value==1)
		{
			this.Yearlyvalue=true;
		}
		else{
			this.Yearlyvalue=false;
		}
		
	
	}


  ngOnInit() {
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
      nameAr: [this.product.model, Validators.required],
	nameEn: [this.product.model],
	period: [this.product.model],
	period1: [this.product.model],
	period2: [this.product.model],
	// mounthlyvalue: [this.product.model],
	// yearlyvalue: [this.product.model],
	description: [this.product.description],
    });
  }
  
  goBack(id) {
		this.loadingSubject.next(false);
		const url = `/ecommerce/products?id=${id}`;
		this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	}
 
	getComponentTitle() {
		let result = 'new contract type';
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
