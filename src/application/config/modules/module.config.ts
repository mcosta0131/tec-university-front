import { AppRouterModule }                                  from './../routes/router.config';
import { BrowserModule }                                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }                 from '@angular/forms';
import { HttpClientModule }                                 from '@angular/common/http';
import { MessageModule }                                    from 'primeng/message';

export const AppModules = [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    HttpClientModule,
    MessageModule
]