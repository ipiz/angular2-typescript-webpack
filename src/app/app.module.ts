import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';

import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRouteModule,

    HomeModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
