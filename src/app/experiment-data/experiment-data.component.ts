import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'experiment-data',
  templateUrl: './experiment-data.component.html',
  styleUrls: ['./experiment-data.component.css']
})
export class ExperimentDataComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;

  result: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://localhost:44376/api/experiments/json/' + this.name + '/' + this.type)
      .subscribe(result => {
        this.result = result;
      });
  }
}