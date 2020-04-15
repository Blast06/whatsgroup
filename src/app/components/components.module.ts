import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GroupCardComponent } from './group-card/group-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RelatedsComponent } from './relateds/relateds.component';
import { CountryCategoryComponent } from './country-category/country-category.component';
import { SingleCategoryCountryComponent } from './single-category-country/single-category-country.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { ShellModule } from '../shell/shell.module';
import { SignupPage } from './signup-1/signup-1.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';




@NgModule({
  declarations: [
    GroupCardComponent,
    CategoryCardComponent,
    RelatedsComponent,
    CountryCategoryComponent,
    SingleCategoryCountryComponent,
    SlideshowBackdropComponent,
    SignupPage,
    LoaderComponent
  ],
  exports: [
    GroupCardComponent,
    CategoryCardComponent,
    RelatedsComponent,
    CountryCategoryComponent,
    SingleCategoryCountryComponent,
    SlideshowBackdropComponent,
    SignupPage,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ShellModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
