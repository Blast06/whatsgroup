import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GroupCardComponent } from './group-card/group-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RelatedsComponent } from './relateds/relateds.component';
import { CountryCategoryComponent } from './country-category/country-category.component';
import { SingleCategoryCountryComponent } from './single-category-country/single-category-country.component';



@NgModule({
  declarations: [
    GroupCardComponent,
    CategoryCardComponent,
    RelatedsComponent,
    CountryCategoryComponent,
    SingleCategoryCountryComponent
  ],
  exports: [
    GroupCardComponent,
    CategoryCardComponent,
    RelatedsComponent,
    CountryCategoryComponent,
    SingleCategoryCountryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
