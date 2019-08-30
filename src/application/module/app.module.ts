import { UnauthorizedView } from '../views/unauthorizied/unauthorized.view';
import { NgModule } from '@angular/core';
import { AppView } from 'src/application/views/app/app.view';
import { LoginView } from 'src/application/views/login/login.view';
import { AppModules } from 'src/application/config/modules/module.config';
import { AppRoutes } from 'src/application/config/routes/router.config';
import { AppServices } from '../config/service/service.config';

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
  providers: [AppServices],
  bootstrap: [AppView]
})
export class AppModule { }
