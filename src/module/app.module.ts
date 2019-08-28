import { UnauthorizedView } from './../application/views/unauthorizied/unauthorized.view';
import { NgModule } from '@angular/core';
import { AppView } from 'src/application/views/app/app.view';
import { LoginView } from 'src/application/views/login/login.view';
import { AppModules } from 'src/application/config/modules/module.config';
import { AppRoutes } from 'src/application/config/routes/router.config';

@NgModule({
  declarations: [
    AppView,
    LoginView,
    UnauthorizedView,
    AppRoutes
  ],
  imports: [
    AppModules
  ],
  providers: [],
  bootstrap: [AppView]
})
export class AppModule { }
