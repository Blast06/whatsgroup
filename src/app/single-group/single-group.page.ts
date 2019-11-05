import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.page.html',
  styleUrls: ['./single-group.page.scss'],
})
export class SingleGroupPage implements OnInit {


  // TODO
  // THIS VAR WILL CHANGE ITS COLOR DEPENDING ON WHAT PLATFORM IS THE GROUP(FB,WS,TELEGRAM,DISCORD)
  buttonColor = 'red';
  constructor() { }

  ngOnInit() {
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
