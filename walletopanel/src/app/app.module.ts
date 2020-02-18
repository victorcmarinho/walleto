import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { DragDropDirective } from './shared/directives/DragDropDirective/drag-drop.directive';
import { UploadComponent } from './shared/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuBarComponent,
    InvoiceComponent,
    UploadComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
