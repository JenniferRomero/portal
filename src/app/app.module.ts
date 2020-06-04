import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';

import { PreloadingStrategyService } from './core/routes/preloading-strategy.service';
import { AuthTokenProvider } from './core/interceptors/auth-token/auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ServicesModule,
    AppRoutingModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [
    AuthTokenProvider,
    PreloadingStrategyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }