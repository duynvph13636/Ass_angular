import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from 'src/types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.books);
  };
  getProduct(id:string): Observable<Product> {
    return this.http.get<Product>(`${environment.books}/${id}`);
  }
  deleteProduct (id:string):Observable<any>{
    return this.http.delete(`${environment.books}/${id}`);
  }
  createProduct(data:ProductCreate):Observable<Product>{
    return this.http.post<Product>(`${environment.books}`,data);
  }
  updateProduct(id:string,data:ProductCreate):Observable<Product>{
    return this.http.put<Product>(`${environment.books}/${id}`,data)
  }
}
