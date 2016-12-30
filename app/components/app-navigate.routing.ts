/**
 * Created by vbloise3 on 12/30/16.
 */
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home";
import {ProductDetailComponent} from "./product";
import {YoMoFoComponent} from './yo-mo-fo';
import {_404Component} from './404';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: 'yo-mo-fo', component: YoMoFoComponent},
    {path: '**', component: _404Component}
];

export const routingNavigate = RouterModule.forRoot(routes);