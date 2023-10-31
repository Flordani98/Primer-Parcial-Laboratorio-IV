import { Component, Input, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/Models';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  @Input()
  public productToModify: Product = {
    id: "",
    description: '',
    price: '',
    stock: 0
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService, private dialogRef: MatDialogRef<EditProductComponent>) {}
  ngOnInit(): void {
    this.productToModify = this.data;
  }


  onSubmit(){
    this.productService.modifyProduct(this.productToModify);
    this.closeDialog();
    console.log(this.productToModify);

  }

  closeDialog(){

    this.dialogRef.close(false)

  }

}
