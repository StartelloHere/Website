import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SvgStartelloComponent } from './svg-startello/svg-startello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalendlyBodyComponent } from './calendly-body/calendly-body.component';
import { HomeJoinBodyComponent } from './home-join-body/home-join-body.component';


@NgModule({
  declarations: [
    AppComponent,
    SvgStartelloComponent,
    HeaderComponent,
    FooterComponent,
    CalendlyBodyComponent,
    HomeJoinBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
