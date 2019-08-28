import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Message } from "primeng/api";


@Component({selector: 'tec-app-login', templateUrl: 'login.view.html', styleUrls: ['./login.view.scss']})
export class LoginView {

    form:       FormGroup;
    messages:   Message[] = [];

    ngOnInit() {
        this.form = new FormGroup({
            usuario: new FormControl('', Validators.required),
            senha: new FormControl('',   Validators.required)
        })
    }
}