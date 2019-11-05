import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-category',
  templateUrl: './country-category.component.html',
  styleUrls: ['./country-category.component.scss'],
})
export class CountryCategoryComponent implements OnInit {

  // dummy data
  cartas = [
    {
    title: 'hola1',
    img: 'https://image.flaticon.com/icons/svg/2148/2148474.svg'
    },
    {
      title: 'hola1',
      img: 'https://image.flaticon.com/icons/svg/2148/2148474.svg'
    },
    {
      title: 'hola1',
      img: 'https://image.flaticon.com/icons/svg/2148/2148474.svg'
    },
    {
      title: 'hola1',
      img: 'https://image.flaticon.com/icons/svg/2148/2148474.svg'
    },
    {
      title: 'hola1',
      img: 'https://image.flaticon.com/icons/svg/2148/2148474.svg'
    },
    {
      title: 'hola1',
      img: 'https://image.flaticon.com/icons/svg/2148/2148474.svg'
    },
];
  constructor() { }

  ngOnInit() {}


}
