import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './core/info/info.component';
import { PlanComponent } from './core/plan/plan.component';
import { AddOnsComponent } from './core/add-ons/add-ons.component';
import { SummaryComponent } from './core/summary/summary.component';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PlanComponent,
    AddOnsComponent,
    SummaryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
