declare var require: any;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BodyDataComparator';

  experimentNames: string[] = [];

  constructor (
    private http: HttpClient
  ) {

    this.http.get('https://localhost:44376/api/experiments/names')
      .subscribe((x: string[]) => {
        this.experimentNames = x;
      });
  }

  getExperiements(): any {
    
  }
}
