import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/application/models/Login';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    
    
    constructor(private http : HttpClient) { }
   
    postJSON() {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');   
        var json = JSON.stringify({matricula: 1, senha: 'senha'});
        var params =  json;
      
       
        return this.http.post<Login>('http://10.220.32.155:8080/home/login', params, {
            headers:headers
        });
    }

    login(params: any) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');   
        var json = JSON.stringify(params);
       // var params =  json;
      
       
        return this.http.post<Login>('http://10.220.32.155:8080/home/login', json, {
            headers:headers
        });
    }
    
}