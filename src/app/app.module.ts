import { DateComponent } from './components/date/date.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ReplyComponent } from './components/reply/reply.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TimerComponent } from './components/timer/timer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RingsComponent } from './components/rings/rings.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    TimerComponent,
    AddressComponent,
    ReplyComponent,
    FooterComponent,
    MainComponent,
    RingsComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
