import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { FundsComponent } from './funds.component';
import { FundsService } from './funds.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpModule, JsonpModule],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent,FundsComponent],
  bootstrap: [AppComponent],
  providers: [HeroService,FundsService]
})

export class AppModule { }
