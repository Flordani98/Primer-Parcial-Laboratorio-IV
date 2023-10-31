import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';

@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  @Input()
  public products : Product[] = [];

  @Output()
  public deletedProduct: EventEmitter<Product> = new EventEmitter()

  @Output()
  public editProduct : EventEmitter<Product> = new EventEmitter();


  deleteProduct(product: Product){
    this.deletedProduct.emit(product);
  }

  updateProduct(product: Product){
    this.editProduct.emit(product);
  }

}
