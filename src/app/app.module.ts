import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicContentComponentComponent } from './dynamic-content-component/dynamic-content-component.component';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContentComponentComponent,
    SafeHtmlPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
