import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  public product: Product = new Product({id: null})

  @Output()
  public addProduct: EventEmitter<Product> = new EventEmitter();

  onSubmit(){
    this.addProduct.emit(this.product);
  }

}
