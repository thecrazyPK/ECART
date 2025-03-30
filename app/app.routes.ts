
import { Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { ProductviewComponent } from './productview/productview.component';

export const routes: Routes = [
   {
    path:"",
    component:HomecomponentComponent
} ,
   {
    path:"product",
    component:ProductComponent
},
    {
        path:"Contact",
        component:ContactComponent
    },
    {
        path:"singleview/:id",
        component:SingleviewComponent
    },
    {
        path:"productview/:id",
        component:ProductviewComponent
    }
];
