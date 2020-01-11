import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../models/group';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss',
              ],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() groups: Group[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    speed: 400
  };
  constructor() { }

  ngOnInit() {}

}
