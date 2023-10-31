import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/Models';
import { ProductService } from 'src/app/core/services/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public products: Product[] = [];

  constructor(private productService: ProductService, private dialog : MatDialog){}
  ngOnInit(): void {
    this.searchProducts();
  }

  public searchProducts(){
    this.productService.getProducts().then(data => this.products = data);
  }

  public addProduct(product: Product){

    let found = false;
    let indexProduct = 0;

    for (let i = 0; i < this.products.length; i++) {
      if(product.description == this.products[i].description){
        found = true;
        indexProduct = i;
      }
    }

    console.log(found);

    if(found){
      this.addOneProduct(this.products[indexProduct])
      console.log(this.products[indexProduct]);
    }else{
      this.productService.addProduct(product);
      
    }

    this.searchProducts();
  }

  public addOneProduct(product : Product){

    if(product.stock != null){
      product.stock = product.stock +1;
      this.productService.modifyProduct(product);
    }
    this.searchProducts();


  }


  public deleteProduct(id: string){ //*elimina por id, el stock completo de un producto
    this.productService.deleteProduct(id);
    this.searchProducts();

  }


  public deleteOneProduct(product: Product){ //*elimina por id, el stock completo de un producto

    if(product.stock != null){
      if(product.stock <= 1){
        this.deleteProduct(product.id!);
      }else{
        product.stock = product.stock -1;
        this.productService.modifyProduct(product);
      }
    }
    this.searchProducts();

  }

  public editProduct(product: Product){
    const dialogRef = this.dialog.open(EditProductComponent, { data: product, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró con resultado:', result);
      this.searchProducts();
      console.log("se actualizo?!??!?!");
    });
  }


}
