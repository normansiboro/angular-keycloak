import { HttpModule } from '@angular/http';
import { ContractService } from './shared/service/contract.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from './shared/service/keycloak.http';
import { KeycloakService } from './shared/service/keycloak.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [KEYCLOAK_HTTP_PROVIDER,
    KeycloakService,
    ContractService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
