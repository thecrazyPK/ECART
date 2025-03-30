import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIserviceService } from '../apiservice.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {

  product: any;
  constructor (private route: ActivatedRoute, private apiservice: APIserviceService) {}

  ngOnInit(){
    const productId= this.route.snapshot.paramMap.get('id');

    if(productId){
      this.apiservice.getProductbyId(productId).subscribe((data) =>{
      this.product=data;
      });
    }
  }
}
