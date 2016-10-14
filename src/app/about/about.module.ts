import { NgModule } from '@angular/core';

import { AboutRouteModule } from './about.route';

import { AboutComponent }   from './about.component';

@NgModule({
  imports: [
    AboutRouteModule
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }
