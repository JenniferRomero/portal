import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    FooterComponent, 
    HeaderComponent,
    PageNotFoundComponent,
    ServiceErrorComponent,
    NotAuthorizedComponent
} from './shared.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FooterComponent, 
    HeaderComponent,
    PageNotFoundComponent,
    ServiceErrorComponent,
    NotAuthorizedComponent
  ],
  declarations: [NotAuthorizedComponent, ServiceErrorComponent, PageNotFoundComponent]
})
export class SharedModule { }