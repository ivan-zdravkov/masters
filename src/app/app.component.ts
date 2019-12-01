declare var require: any;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BodyDataComparator';
  activeIndex: number;

  experimentNames: string[] = [
    '1543237295778',
    '1543237355130',
    '1543237540358',
    '1543237630950',
    '1543291762854',
    '1543291865682',
    '1543291963643',
    '1543292046647',
    '1543292835008',
    '1543292921218',
    '1543293002674',
    '1543293096901',
    '1543293546917',
    '1543293588619',
    '1543293629308',
    '1543293735843',
    '1543294475796',
    '1543294528858',
    '1543294583690',
    '1543294662898',
  ];

  constructor () { }

  visualize(index: number): boolean {
    return this.activeIndex === index;
  }

  set(index: number) {
    this.activeIndex = index;
  }
}
