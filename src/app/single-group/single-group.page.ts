import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group';

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.page.html',
  styleUrls: ['./single-group.page.scss'],
})
export class SingleGroupPage implements OnInit {

  
  show = true;
  groups: Group[] = [
    {
      name: 'groidfosa',
      image: 'http://lorempixel.com/400/200/',
      type: "nenas",
      description: "fmoimfdisoamofsd",
      creation: 45,
      link: 'www.google.com'

    },
    {
      name: 'groidfosa',
      image: 'http://lorempixel.com/400/200/',
      type: "nenas",
      description: "fmoimfdisoamofsd",
      creation: 45,
      link: 'www.google.com'
    },
    {
      name: 'groidfosa',
      image: 'http://lorempixel.com/400/200/',
      type: "nenas",
      description: "fmoimfdisoamofsd",
      creation: 45,
      link: 'www.google.com'
    },
    {
      name: 'groidfosa',
      image: 'http://lorempixel.com/400/200/',
      type: 'nenas',
      description: 'fmoimfdisoamofsd',
      creation: 45,
      link: 'www.google.com'
    },
    {
      name: 'groidfosa',
      image: 'http://lorempixel.com/400/200/',
      type: 'nenas',
      description: 'fmoimfdisoamofsd',
      creation: 45,
      link: 'www.google.com'
    },
    {
      name: 'groidfosa',
      image: 'http://lorempixel.com/400/200/',
      type: 'nenas',
      description: 'fmoimfdisoamofsd',
      creation: 45,
      link: 'www.google.com'
    }
  ];

  // TODO
  // THIS VAR WILL CHANGE ITS COLOR DEPENDING ON WHAT PLATFORM IS THE GROUP(FB,WS,TELEGRAM,DISCORD)
  buttonColor = 'red';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.show = !this.show;
    }, 8000);
  }

  goTo() {
    console.log('hola grupo');
  }

  btnActivate(ionicButton: any) {
      if (ionicButton === 'primary') {
        ionicButton.color = 'secondary';
      } else {
        ionicButton.color = 'dark';
      }
  }

}
