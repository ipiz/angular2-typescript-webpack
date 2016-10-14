import { NgModule } from '@angular/core';

import { HomeRouteModule } from './home.route';
import { HomeComponent }   from './home.component';

@NgModule({
  imports: [
    HomeRouteModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
