/**
 * Created by vincebloise on 12/29/16.
 */
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home";
import {ProductDetailComponent} from "./product";
import {YoMoFoComponent} from './yo-mo-fo';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: 'yo-mo-fo', component: YoMoFoComponent}
];

export const routing = RouterModule.forRoot(routes);