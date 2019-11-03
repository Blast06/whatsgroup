import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GroupCardComponent } from './group-card/group-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';



@NgModule({
  declarations: [
    GroupCardComponent,
    CategoryCardComponent
  ],
  exports: [
    GroupCardComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
