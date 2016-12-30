/**
 * Created by vincebloise on 12/30/16.
 */
import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home";
import {ProductDetailComponentParam} from "./components/product-param";
import {YoMoFoComponent} from './components/yo-mo-fo';
import {_404Component} from './components/404';
import {routingNavigate} from './components/app-navigate.routing';

/*const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product/:id', component: ProductDetailComponentParam}
];*/

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>        
        <a [routerLink]="['/product', 1234]">Product Details</a> 
        <a [routerLink]="['/yo-mo-fo']">Yo, mo-fo!</a>
        <input type="button" value="Mo-Fo!" 
               (click)="navigateToYoMoFo()" /> 
        <router-outlet></router-outlet>
    `
})
class AppComponent {
    constructor(private _router: Router){}

    navigateToProductDetail(){
        this._router.navigate(["/product"]);
    }

    navigateToYoMoFo(){
        this._router.navigate(["/yo-mo-fo"]);
    }
}

@NgModule({
    imports:      [ BrowserModule, routingNavigate],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponentParam, YoMoFoComponent, _404Component],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);