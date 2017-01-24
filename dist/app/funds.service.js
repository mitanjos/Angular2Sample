"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('./rxjs-operators');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var FundsService = (function () {
    function FundsService(http) {
        this.http = http;
        this.url = "http://nextgenbank-techcielo.rhcloud.com/fundDetails/list/fundTypes";
    }
    FundsService.prototype.getFundTypes = function () {
        console.log("Should send AJAX request");
        return this.http.get(this.url).map(this.extractData).catch(this.handleError);
    };
    FundsService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    FundsService.prototype.handleError = function (error) {
        console.log("Error occured");
        return Observable_1.Observable.throw(error);
    };
    FundsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FundsService);
    return FundsService;
}());
exports.FundsService = FundsService;
//# sourceMappingURL=funds.service.js.map