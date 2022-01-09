import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { AboutUsComponent } from './Page/about-us/about-us.component';
import { ContactComponent } from './Page/contact/contact.component';

import { HomeComponent } from './Page/home/home.component';
import { SheepAddComponent } from './Component/sheep-add/sheep-add.component';
import { UpdateSheepComponent } from './Component/update-sheep/update-sheep.component';

import { SheepComponent } from './Component/sheep/sheep.component';
import { SheepHomeComponent } from './Page/sheep-home/sheep-home.component';


const routes: Routes = [

  {
    path:"",
    component:MainLayoutComponent,
    children: [

      {
        path:"",
        component:HomeComponent
      },
      {
        path:"anasayfa",
        component:HomeComponent
      },

      {
        path:"liste",
        component:SheepHomeComponent
      },




      {
        path:"güncelle/:id",
        component:UpdateSheepComponent
      },



      {
        path:"ekle",
        component:SheepAddComponent
      },


      {
        path:"hakkimizda",
        component:AboutUsComponent
      },

      {
        path:"iletisim",
        component:ContactComponent
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
