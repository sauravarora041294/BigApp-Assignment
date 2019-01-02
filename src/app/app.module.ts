import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {TableModule} from './table/table.module';
import {AjaxService} from '../services/ajax.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SearchModule} from './search/search.module';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
    TableModule,
    HttpClientModule,
    SearchModule
  ],
  providers: [
    HttpClient,
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
