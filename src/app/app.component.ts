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

  experimentNames: string[] = [];

  constructor (
    private http: HttpClient
  ) {

    this.http.get(environment.baseUrl + '/api/experiments/names')
      .subscribe((x: string[]) => {
        this.experimentNames = x;
      });
  }

  visualize(index: number): boolean {
    return this.activeIndex === index;
  }

  set(index: number) {
    this.activeIndex = index;
  }
}
