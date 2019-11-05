import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  groups: any = [
    {
      title: 'APP',
      img: 'https://image.flaticon.com/icons/svg/2038/2038035.svg'
    },
    {
      title: 'Buildings',
      img: 'https://image.flaticon.com/icons/svg/2038/2038008.svg'
    },
    {
      title: 'ATM',
      img: 'https://image.flaticon.com/icons/svg/2038/2038009.svg'
    },
    {
      title: 'Cabin',
      img: 'https://image.flaticon.com/icons/svg/2038/2038214.svg'
    },
];
  constructor() {}


  

}
