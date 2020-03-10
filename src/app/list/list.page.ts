import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  groups: any;
  route: string;

  slideOpts = {
    slidesPerView: 1.3,
    coverflowEffect: {
      rotate: 50,
      stretch: 3,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };
  public icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private _http: HttpService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    _http.get('/api/countries').then( (data: any) => {
      console.log('countries :', JSON.parse(data.data));
    });
    _http.get('/api/groups').then( (data: any) => {
      this.groups = data;
      console.log('groups :', JSON.parse(data.data));
    });

    _http.get('/api/tags').then( (data: any) => {
      console.log('tags :', JSON.parse(data.data));
    });
    _http.get('/api/tags').then( (data: any) => {
      console.log('tags :', data);
    });


  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
