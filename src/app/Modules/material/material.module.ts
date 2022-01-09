import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatSortModule,
    MatTreeModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatIconModule

  ],

  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSelectModule,
    MatSortModule,
    MatTreeModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
