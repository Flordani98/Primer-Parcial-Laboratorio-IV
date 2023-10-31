import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../Models';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private apiService: ApiService) { }

    public getProducts(): Promise<Product[]>{
        
        return new Promise<Product[]>((resolve, reject) =>{
            this.apiService.getProducts().subscribe({
                next: data => resolve(data),
                error: error => reject(error)
            })
        });
    }

    public addProduct(product: Product){
        return new Promise<Product>((resolve, reject) =>{
            this.apiService.addProduct(product).subscribe({
                next: data => {
                resolve(data)
                alert("Se agrego el producto")},
                
                error: error => reject(error)
            })
        });
    }

    public modifyProduct(product : Product){
        return new Promise<Product>((resolve, reject)=>{
            this.apiService.modifyProduct(product).subscribe({
                next: data => resolve(data),
                error:  error => reject(error)
          })
        });

    }
    
    public deleteProduct(idProduct : string){
        return new Promise<boolean>((resolve, reject)=>{
            this.apiService.deleteProduct(idProduct).subscribe({
                next: data => resolve(data),
                error:  error => reject(error)
          })
        });

    }

    
}