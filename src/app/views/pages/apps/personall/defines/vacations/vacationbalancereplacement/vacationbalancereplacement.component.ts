import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ProductModel, selectProductById, ProductsService } from '../../../../../../../core/e-commerce';
import { AppState } from '../../../../../../../core/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { SubheaderService, LayoutConfigService } from '../../../../../../../core/_base/layout';

@Component({
  selector: 'kt-vacationbalancereplacement',
  templateUrl: './vacationbalancereplacement.component.html',
  styleUrls: ['./vacationbalancereplacement.component.scss']
})
export class VacationbalancereplacementComponent implements OnInit {
  dataForm: FormGroup;
  hasFormErrors: boolean = false;
  product:ProductModel;
  loadingSubject = new BehaviorSubject<boolean>(true);
  loading$: Observable<boolean>;
  private headerMargin: number;
  private componentSubscriptions: Subscription;
  AVAILABLE_VACATIONTYPE: string[];
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
  ngOnInit() {
	this.AVAILABLE_VACATIONTYPE=['Casual Vacation','Sick Vacation','Opening Vacation'];
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
    code: [this.product.model],
    date: [this.product.model],
    mold: [this.product.model],
    employeename: [this.product.model],
    job: [this.product.model],
    administration: [this.product.model],
    hiringdate: [this.product.model],
    element: [this.product.model],
	currentbalance: [this.product.model],
	balancereplaced: [this.product.model],
		});
      
	}
  goBack(id) {
		this.loadingSubject.next(false);
		const url = `/ecommerce/products?id=${id}`;
		this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	}
 
	getComponentTitle() {
		let result = 'new Importing Leave Balances';
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