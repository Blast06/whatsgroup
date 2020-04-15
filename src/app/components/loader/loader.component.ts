import { Component, OnInit, ElementRef, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, AfterViewInit, OnDestroy {

  loadingSubscription: Subscription;
  constructor(
    private loadingScreenService: LoadingService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this._elmRef.nativeElement.style.display = 'div';
    console.log('fdisjaifodjsoaifjdosjfos5');

    this.loadingSubscription = this.loadingScreenService.loading$.pipe().subscribe(
      (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
        console.log('fdisjaifodjsoaifjdosjfos3');

      }
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
    console.log('fdisjaifodjsoaifjdosjfos4');

  }

}
