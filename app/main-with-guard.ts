/**
 * Created by vincebloise on 12/31/16.
 */
import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from "./components/product-child";
import {ProductDescriptionComponent} from './components/product-description';
import {SellerInfoComponent} from './components/seller';
import {LoginGuard} from "./guards/login.guard";
import {UnsavedChangesGuard} from "./guards/unsaved_changes.guard";
import {YoMoFoComponent} from './components/yo-mo-fo';
import {_404Component} from './components/404';
import {routingNavigate} from './components/app-guard.routing';


/*const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductDetailComponent,
        canActivate:[LoginGuard], canDeactivate:[UnsavedChangesGuard]}
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
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent, ProductDescriptionComponent, SellerInfoComponent, YoMoFoComponent, _404Component],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy},
        LoginGuard, UnsavedChangesGuard],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);