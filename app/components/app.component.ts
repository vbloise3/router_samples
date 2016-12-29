/**
 * Created by vincebloise on 12/29/16.
 */
import {Component} from '@angular/core';
@Component({
    selector: 'app',
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product']">Product Details</a>
        <a [routerLink]="['/yo-mo-fo']">Yo, mo-fo!</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}