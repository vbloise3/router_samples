/**
 * Created by vincebloise on 12/29/16.
 */
import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from "./components/product";
import {YoMoFoComponent} from './components/yo-mo-fo';
import {_404Component} from './components/404';

const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: 'yo-mo-fo', component: YoMoFoComponent},
    {path: '**', component: _404Component}
];

@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <a [routerLink]="['/yo-mo-fo']">Yo, mo-fo!</a>
        <input type="button" value="Product Details" 
               (click)="navigateToProductDetail()" /> 
        <router-outlet></router-outlet>
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
    imports:      [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent, YoMoFoComponent, _404Component],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);