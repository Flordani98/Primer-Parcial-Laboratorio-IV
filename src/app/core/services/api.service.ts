import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getToAuth(email: string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }


  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURL}/products`);
  }

  public modifyProduct(product: Product):Observable<Product>{ 
    return this.http.patch<Product>(`${this.baseURL}/products/${product.id}`, product);

 }

 public deleteProduct(id: string):Observable<boolean>{ //*Elimina por id, al producto, sin importar el stock
  return this.http.delete<boolean>(`${this.baseURL}/products/${id}`);
}

  public addProduct(product : Product): Observable<Product>{
      return this.http.post<Product>(`${this.baseURL}/products`, product) 
  }

  public updateProduct(product: Product): Observable<Product> {
    if (!product.id) throw Error("Product id is required");

    return this.http.put<Product>(`${this.baseURL}/products/${product.id}`, product);
  }


}
