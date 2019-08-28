import { Component } from "@angular/core";



@Component({
    selector: 'unauthorized-view',
    template: `
        <h1>403</h1>
        <h2>Página Restrita</h2>
        <p>Clique <a href="/login">aqui</a> para fazer login</p>
    `
})
export class UnauthorizedView {
    
}