/**
 * Created by vincebloise on 12/29/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app.component';
import {HomeComponent} from "./components/home";
import {ProductDetailComponent} from "./components/product";
import {YoMoFoComponent} from './components/yo-mo-fo';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {routing} from './components/app.routing';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, ProductDetailComponent, YoMoFoComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    //providers:[{provide: APP_BASE_HREF, useValue: '/'}], // requires configuring redirects on web server
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);