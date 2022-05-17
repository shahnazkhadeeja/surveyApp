import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import  {HttpClientModule} from '@angular/common/http';


import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatListModule} from '@angular/material/list';
import html2canvas from 'html2canvas';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';

import { QRCodeModule } from 'angular2-qrcode';
import { FormComponent } from './form/form.component';
import { QrcComponent } from './qrc/qrc.component';
import { ShareModule } from 'ngx-sharebuttons';
import { VcardComponent } from './vcard/vcard.component';
import { LogoComponent } from './logo/logo.component';
 


const modules = [

  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
 
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QrcComponent,
    VcardComponent,
    LogoComponent,
       
    ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
 
    QRCodeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatRadioModule,
    MatProgressBarModule,
    ShareModule,
    BrowserAnimationsModule ,
    NgxQrcodeStylingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
