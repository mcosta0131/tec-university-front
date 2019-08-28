import { UnauthorizedView }             from './../../views/unauthorizied/unauthorized.view';
import { NgModule }                     from "@angular/core";
import { LoginView }                    from 'src/application/views/login/login.view';
import { RouterModule, Routes }         from '@angular/router';


const routes: Routes = [
    { path: '',                     component: LoginView },
    { path: 'login',                component: LoginView },
    { path: 'unauthorized',         component: UnauthorizedView },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule {
    
}

export const AppRoutes = [
    LoginView,
    UnauthorizedView
]
