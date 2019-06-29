import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'experiment-data',
  templateUrl: './experiment-data.component.html',
  styleUrls: ['./experiment-data.component.css']
})
export class ExperimentDataComponent implements OnInit {
  @Input() name: string;

  result2D: any;
  result3D: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://localhost:44376/api/experiments/json/' + this.name + '/2D')
      .subscribe(result => {
        this.result2D = result;
      });
  }
}