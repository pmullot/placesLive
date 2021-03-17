import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GooglePlacesService } from './google-places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('text')
  text: ElementRef<HTMLInputElement>;

  public places$ = this._placesService.results$.asObservable();

  constructor(
    private _placesService: GooglePlacesService,
    private _cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    fromEvent(this.text.nativeElement, 'input')
      .pipe(debounceTime(300))
      .subscribe((event) => {
        this.findPlaces(this.text.nativeElement.value);
      });
  }

  public findPlaces(value: any): void {
    this._placesService.getPredictions(value).then(() => {
      //this._cd.detectChanges();
    });
  }
}
