import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ContactEnum } from './contactEnum';
import { Observable, throwError } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class TextService{

    private url:string = "http://localhost:8080/getJsonData";
    private saveUrl:string = "http://localhost:8080/saveJsonData";
    private showUrl:string = "http://localhost:8080/showJsonData";
    private jsonData;

    constructor(private httpClient: HttpClient){

    }
    getJsonData(): Observable<ContactEnum> {
       return this.httpClient.get<ContactEnum>(this.url);
    }

    saveForm(): Observable<string> {
        return this.httpClient.post<string>(this.saveUrl, this.jsonData);
    }
    showSavedForm(): Observable<ContactEnum> {
        return this.httpClient.get<ContactEnum>(this.showUrl);
     }
}