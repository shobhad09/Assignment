import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee-app.component';

import { CustomPipeComponent } from './views/custom-pipe.component';
import { GreetingPipeComponent } from './Pipes/greeting.pipe';
import {DivisionPipeComponent} from ''

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    GreetingPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [
  GreetingPipeComponent
  ]
})
export class AppModule { }
