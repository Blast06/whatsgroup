import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Events } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from '@rdlabo/capacitor-admob';


const { AdMob } = Plugins;


const options: AdOptions = {
  adId: 'ca-app-pub-3940256099942544/6300978111',
  adSize: AdSize.BANNER,
  position: AdPosition.BOTTOM_CENTER,
  margin: 0,
};


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges {

  @Input() data: any;
  @Output() onItemClick = new EventEmitter();

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


  constructor(private events: Events) {
    events.subscribe('user:menu');
    this.data = {

      'items': [
        {
          'id': 1,
          'images': 'assets/imgs/content/1.jpg',
          'title': 'Pink Classic Chair',
          'numberPhoto': 'March 14th, 2019',
        },
        {
          'id': 2,
          'images': 'assets/imgs/content/2.jpg',
          'title': 'Deep Sea Jellyfish',
          'numberPhoto': 'March 19th, 2019',
        },
        {
          'id': 3,
          'images': 'assets/imgs/content/3.jpg',
          'title': 'Floating Pink Cherry',
          'numberPhoto': 'April 27th, 2019',
        },
        {
          'id': 4,
          'images': 'assets/imgs/content/4.jpg',
          'title': 'Green Leaf Pattern',
          'numberPhoto': 'June 15th, 2019',
        },
        {
          'id': 5,
          'images': 'assets/imgs/content/5.jpg',
          'title': 'Trees and Blue River',
          'numberPhoto': 'August 25th, 2019',
        },
        {
          'id': 6,
          'images': 'assets/imgs/content/6.jpg',
          'title': 'Pink Jellyfish in Sea',
          'numberPhoto': 'April 22th, 2019',
        },
        {
          'id': 7,
          'images': 'assets/imgs/content/7.jpg',
          'title': 'Orange Stairs Building',
          'numberPhoto': 'July 14th, 2019',
        },
        {
          'id': 8,
          'images': 'assets/imgs/content/8.jpg',
          'title': 'Color full Tennis Court',
          'numberPhoto': 'January 29th, 2019',
        },
        {
          'id': 9,
          'images': 'assets/imgs/content/9.jpg',
          'title': 'Green Vegetables Pattern',
          'numberPhoto': 'April 17th, 2019',
        },
        {
          'id': 10,
          'images': 'assets/imgs/content/10.jpg',
          'title': 'Abstract Blue Wallpaper',
          'numberPhoto': 'May 12th, 2019',
        }
      ]
  
    };
    console.log('this.data :', this.data);


    // Show Banner Ad
    AdMob.showBanner(options)
    .then(
        (value) => {
            console.log(value);  // true
        },
        (error) => {
            console.error(error); // show error
        }
    );


    // Subscibe Banner Event Listener
    AdMob.addListener('onAdLoaded', (info: boolean) => {
      console.log("Banner Ad Loaded");
 });

    // Get Banner Size
    AdMob.addListener('onAdSize', (info: boolean) => {
          console.log(info);
    });

  }


  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes.data.currentValue;
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }



}
