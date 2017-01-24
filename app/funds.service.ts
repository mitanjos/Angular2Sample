import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {FundType} from './fundtype'
import './rxjs-operators'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FundsService {
    private url = "http://nextgenbank-techcielo.rhcloud.com/fundDetails/list/fundTypes"

    constructor(private http:Http){}

    getFundTypes(): Observable<FundType> {  
        console.log("Should send AJAX request")      
        return this.http.get(this.url).map(this.extractData).catch(this.handleError)
    }

    private extractData(res:Response){
        console.log(res);
        let body = res.json();
        return body||{};
    }

    private handleError(error:Response|any){
        console.log("Error occured")
        return Observable.throw(error);
    }
}