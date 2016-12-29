"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vincebloise on 12/29/16.
 */
var core_1 = require("@angular/core");
var YoMoFoComponent = (function () {
    function YoMoFoComponent() {
    }
    return YoMoFoComponent;
}());
YoMoFoComponent = __decorate([
    core_1.Component({
        selector: 'yo-mo-fo',
        template: '<h1 class="yo-mo-fo">Yo! Mo-fo!!</h1>',
        styles: ['.yo-mo-fo {background: orange}']
    })
], YoMoFoComponent);
exports.YoMoFoComponent = YoMoFoComponent;
