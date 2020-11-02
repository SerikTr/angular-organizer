import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OrganizerComponent } from './organizer/organizer.component';
import {MomentPipe} from './shared/moment.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    CalendarComponent,
    OrganizerComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
