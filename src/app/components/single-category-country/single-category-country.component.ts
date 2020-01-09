import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-single-category-country',
  templateUrl: './single-category-country.component.html',
  styleUrls: ['./single-category-country.component.scss'],
})

export class SingleCategoryCountryComponent implements OnInit {

  @Input() carta: Category [];
  constructor() {

  }

  ngOnInit() {}

}
