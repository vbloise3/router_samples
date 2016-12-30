/**
 * Created by vincebloise on 12/30/16.
 */
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home";
import {ProductDetailComponent} from "./product-child";
import {ProductDescriptionComponent} from './product-description';
import {SellerInfoComponent} from './seller';
import {YoMoFoComponent} from './yo-mo-fo';
import {_404Component} from './404';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product/:id', component: ProductDetailComponent,
        children: [
            {path: '',           component: ProductDescriptionComponent},
            {path: 'seller/:id', component: SellerInfoComponent}
        ]},
    {path: 'yo-mo-fo', component: YoMoFoComponent},
    {path: '**', component: _404Component}
];

export const routingNavigate = RouterModule.forRoot(routes);