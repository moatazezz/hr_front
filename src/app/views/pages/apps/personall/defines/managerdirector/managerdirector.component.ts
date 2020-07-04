import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { ProductModel, selectProductById, ProductsService } from '../../../../../../core/e-commerce';
import { AppState } from '../../../../../../core/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SubheaderService, LayoutConfigService } from '../../../../../../core/_base/layout';


@Component({
  selector: 'kt-managerdirector',
  templateUrl: './managerdirector.component.html',
  styleUrls: ['./managerdirector.component.scss']
})
export class ManagerdirectorComponent implements OnInit {

  
  dataForm: FormGroup;
  hasFormErrors: boolean = false;
  product:ProductModel;
  loadingSubject = new BehaviorSubject<boolean>(true);
  loading$: Observable<boolean>;
  private headerMargin: number;
  private componentSubscriptions: Subscription;
  
  AVAILABLE_ADMINISTRATIONTYPE: string[];
  AVAILABLE_ADMINISTRATION: string[];
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
  ngOnInit() {
    this.AVAILABLE_ADMINISTRATIONTYPE=['one','two','three','four'];
    this.AVAILABLE_ADMINISTRATION=['direct1','adminstration1'];
    this.AVAILABLE_EMPLOYEE=['Manal','Khalef','Ali'];
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
      administrationtype: [this.product.VINCode],
      administration: [this.product.model],
      employee: [this.product.model],
	  description: [this.product.description],
    });
  }
  
  goBack(id) {
		this.loadingSubject.next(false);
		const url = `/ecommerce/products?id=${id}`;
		this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
	}
 
	getComponentTitle() {
		let result = 'new manager director';
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
