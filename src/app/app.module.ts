import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';

import { PreloadingStrategyService } from './core/routes/preloading-strategy.service';
import { AuthTokenProvider } from './core/interceptors/auth-token/auth-token.interceptor';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { GlobalErrorHandlerService } from './services/exceptions/global-error-handler.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    NgIdleKeepaliveModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    LoggerModule.forRoot({
      // serverLoggingUrl: 'api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000})
  ],
  providers: [
    // AuthTokenProvider,
    PreloadingStrategyService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
