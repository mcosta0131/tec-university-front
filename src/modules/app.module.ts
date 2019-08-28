import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppView } from 'src/application/views/app/app.view';
import { LoginView } from 'src/application/views/login/login.view';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppView,
    LoginView,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LoginView]
})
export class AppModule { }
