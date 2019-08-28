import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    selector: 'tec-app',
    template: '<router-outlet></router-outlet>'
})

export class AppView {

   
    constructor(private router: Router) {

}
    ngOnInit() {
        //this.router.navigate(['/login']);
    }
}