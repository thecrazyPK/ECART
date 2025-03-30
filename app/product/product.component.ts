import { Component } from '@angular/core';
import { APIserviceService } from '../apiservice.service';
import { CardaComponent } from '../carda/carda.component';

@Component({
  selector: 'app-product',
  imports: [CardaComponent],
  templateUrl: './product.component.html',
  styleUrls:['./product.component.scss'] 
})
export class ProductComponent {
  products:any[] =[];
 
  constructor(private apiservice: APIserviceService){}

  ngOnInit()
  {
    this.apiservice.getProduct().subscribe((data:any)=>{
      this.products=data;
    });
  }
}
