import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService){}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.service.getProducts().subscribe(
      data => {
        console.log(data);
        this.products = data
      }
    )
  }

  deleteProduct(id: number) {

    Swal.fire({
      title: "Estas seguro de Eliminar",
      text: "Seguro de querer realizar esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.deleteProductById(id).subscribe(
          ()=> this.listProducts()
        )

        Swal.fire({
          title: "Registro eliminado!",
          text: "El registro fue eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });


  }

}
