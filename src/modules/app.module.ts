import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppView } from 'src/application/views/app/app.view';

@NgModule({
  declarations: [
    AppView
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppView]
})
export class AppModule { }
