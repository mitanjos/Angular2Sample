import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import {FundsService} from './funds.service'
import {FundType} from './fundtype'

@Component({
    moduleId: module.id.replace("/dist/", "/"),
    selector: 'funds',
    templateUrl: 'funds.component.html',
})

export class FundsComponent implements OnInit {
    
    fundType:FundType=new FundType();
    
    constructor(private fundservice:FundsService){        
    }

    ngOnInit(): void {
        this.fundservice.getFundTypes().subscribe(x=>this.fundType=x,y=>console.log(y));
    }

    getFundHouses(): void {
    }
}