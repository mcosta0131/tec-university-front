import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TestService {
  
  
  
  constructor(private http: HttpClient) { }


  getMethod() {
    return this.http.get('http://10.220.32.155:8080/home/hello');
  }

}