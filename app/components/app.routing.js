"use strict";
/**
 * Created by vincebloise on 12/29/16.
 */
var router_1 = require("@angular/router");
var home_1 = require("./home");
var product_1 = require("./product");
var yo_mo_fo_1 = require("./yo-mo-fo");
var routes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'product', component: product_1.ProductDetailComponent },
    { path: 'yo-mo-fo', component: yo_mo_fo_1.YoMoFoComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
