import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  private apiUrl: string = "https://api-segundo-tinr.herokuapp.com"

  constructor(
    private httpClient : HttpClient) {
    
     }
  
     public getList() : Observable<any> {
       let endpoint : string = this.apiUrl + "/posts";
       return this.httpClient.get(endpoint);
     }
}
