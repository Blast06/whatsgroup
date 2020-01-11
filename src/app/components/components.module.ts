import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GroupCardComponent } from './group-card/group-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RelatedsComponent } from './relateds/relateds.component';
import { CountryCategoryComponent } from './country-category/country-category.component';
import { SingleCategoryCountryComponent } from './single-category-country/single-category-country.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { ShellModule } from '../shell/shell.module';



@NgModule({
  declarations: [
    GroupCardComponent,
    CategoryCardComponent,
    RelatedsComponent,
    CountryCategoryComponent,
    SingleCategoryCountryComponent,
    SlideshowBackdropComponent
  ],
  exports: [
    GroupCardComponent,
    CategoryCardComponent,
    RelatedsComponent,
    CountryCategoryComponent,
    SingleCategoryCountryComponent,
    SlideshowBackdropComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ShellModule,
  ]
})
export class ComponentsModule { }
