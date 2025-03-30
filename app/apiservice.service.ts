import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
//created object of http client
  constructor(private http:HttpClient) 
  {

   }
   getProduct()
   {
    return this.http.get("https://fakestoreapi.com/products")
   }

   //single view
   getProductbyId(id: string)
   {

    return this.http.get(`https://fakestoreapi.com/products/${id}`)
    
   }
}
