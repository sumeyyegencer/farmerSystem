import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from '../../src/app/Modules/material/material.module';

import { AboutUsComponent } from './Page/about-us/about-us.component';
import { ContactComponent } from './Page/contact/contact.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { MainNavComponent } from './Nav/main-nav/main-nav.component';
import { HomeComponent } from './Page/home/home.component';
import { PageTitleComponent } from './Component/page-title/page-title.component';
import { SheepAddComponent } from './Component/sheep-add/sheep-add.component';
import { UpdateSheepComponent } from './Component/update-sheep/update-sheep.component';
import { MenuGroupComponent } from './Component/menu-group/menu-group.component';

import { SheepComponent } from './Component/sheep/sheep.component';
import { Router, RouterModule } from '@angular/router';
import { SheepHomeComponent } from './Page/sheep-home/sheep-home.component';

import { FooterNavComponent } from './Nav/footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    AppComponent,

    AboutUsComponent,

    ContactComponent,
    MainLayoutComponent,
    MainNavComponent,

    HomeComponent,
    PageTitleComponent,
    SheepAddComponent,
    UpdateSheepComponent,
    MenuGroupComponent,

    SheepComponent,
    SheepHomeComponent,
    FooterNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    PageTitleComponent,
    SheepComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
