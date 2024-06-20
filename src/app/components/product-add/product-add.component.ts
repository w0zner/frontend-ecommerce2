import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute){
                this.productForm = this.fb.group({
                  id: [0],
                  name: ['', Validators.required],
                  code: ['', Validators.required],
                  description: ['', Validators.required],
                  urlImage: ['', Validators.required],
                  price: [0, [Validators.required, Validators.min(0)]],
                  //userId: ['', Validators.required],
                  //categoryId: ['', Validators.required],
                });
  }

  ngOnInit(): void {
    this.getProductById();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  onSubmit() {
    //this.productForm.valid && this.selectedFile
    if (true) {
      const product = new Product(
        this.productForm.value.id,
        this.productForm.value.name,
        this.productForm.value.code,
        this.productForm.value.description,
        this.productForm.value.urlImage,
        this.selectedFile,
        this.productForm.value.price,
        this.productForm.value.userId,
        this.productForm.value.categoryId
      );

      this.productService.createProduct(product).subscribe(response => {
        console.log('Product added successfully:', response);
        this.router.navigate(['admin/products']);
      }, error => {
        console.error('Error adding product:', error);
      });
    }
  }

  getProductById() {
    this.activatedRoute.params.subscribe(
      prod => {
        let id = prod['id'];
        if(id){
          console.log("ID a editar " + id)
          this.productService.getProductById(id).subscribe(
            data => {
              this.productForm.patchValue({
                id: data.id,
                name: data.name,
                code: data.code,
                description: data.description,
                urlImage: data.urlImage,
                price: data.price,
                userId: data.userId,
                categoryId: data.categoryId
              });
            }
          )
        }
      }
    );
  }

  habilitarCambiarImagen() {
    this.productForm.get('urlImage')?.setValue("");
  }
}
