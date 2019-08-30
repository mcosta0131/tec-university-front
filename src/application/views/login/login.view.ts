import { LoginService } from './../../services/login/login.service';
import { TestService } from './../../services/test.service';
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Message } from "primeng/api";
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({selector: 'tec-app-login', templateUrl: 'login.view.html', styleUrls: ['./login.view.scss']})
export class LoginView {

    constructor(private service : TestService,
        private loginService : LoginService,
        private http: HttpClient){}

    form:       FormGroup;
    messages:   Message[] = [];
    usuario :   Number;
    senha:      String;
        
    ngOnInit() {
       
        this.form = new FormGroup({
            usuario: new FormControl('', Validators.required),
            senha: new FormControl('',   Validators.required)
        })
        
    }

    onClickMe(){
       let user = this.form.controls.usuario.value;
       let password = this.form.controls.senha.value

       console.log('USUARIO NO FORM ' + this.form.controls.usuario.value)
       console.log('SENHA NO FORM ' + this.form.controls.senha.value)
       
        this.loginService.login({
           usuario: user,
           senha: password
       }).subscribe(
           response =>{
               console.log(response)
           }
       )
    }
}