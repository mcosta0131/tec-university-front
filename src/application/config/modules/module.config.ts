import { AppRouterModule } from './../routes/router.config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


export const AppModules = [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule
]