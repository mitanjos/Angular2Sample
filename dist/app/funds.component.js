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
var funds_service_1 = require('./funds.service');
var fundtype_1 = require('./fundtype');
var FundsComponent = (function () {
    function FundsComponent(fundservice) {
        this.fundservice = fundservice;
        this.fundType = new fundtype_1.FundType();
    }
    FundsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fundservice.getFundTypes().subscribe(function (x) { return _this.fundType = x; }, function (y) { return console.log(y); });
    };
    FundsComponent.prototype.getFundHouses = function () {
    };
    FundsComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/"),
            selector: 'funds',
            templateUrl: 'funds.component.html',
        }), 
        __metadata('design:paramtypes', [funds_service_1.FundsService])
    ], FundsComponent);
    return FundsComponent;
}());
exports.FundsComponent = FundsComponent;
//# sourceMappingURL=funds.component.js.map