import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BikelistComponent } from './components/bikelist/bikelist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BikelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
