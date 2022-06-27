import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { ApiListComponent } from './api-list/api-list.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DefaultButtonComponent,
    MainPageComponent,
    LoginPageComponent,
    AboutUsPageComponent,
    ContactUsComponent,
    CardLayoutComponent,
    ApiListComponent,
    RestaurantSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
