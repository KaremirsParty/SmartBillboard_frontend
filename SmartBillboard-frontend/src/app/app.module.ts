import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EthService } from './metamask/eth-service';
import { MetamaskComponent } from './metamask/metamask.component';

@NgModule({
  declarations: [
    AppComponent,
    MetamaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
