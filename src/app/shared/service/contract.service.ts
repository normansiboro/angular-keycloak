import { Contract } from '../model/contract.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class ContractService {

    URL: string;

    constructor(private http: Http, private httpClient: HttpClient) { }

   

    public getContracts(): Observable<Contract[]> {
        const url = `${environment.BACKEND_URL}/contracts`;
        return this.http.get(url)
            .map(response => response.json());
    }

    public getProduct(): Observable<Contract[]> {
        const url = `${environment.BACKEND_URL}/productsmi`;
        return this.http.get(url)
            .map(response => response.json());
    }

    getData() {
        this.URL = environment.BACKEND_URL + "/productsmi";
        return this.http.get(this.URL)
        .do(data=>console.log(JSON.stringify(data)))
      }
}
