import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AjaxService} from '../services/ajax.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  title = 'bigApp';
  public table_data: Object[];
  public totalRec: number;
  public page: number = 1;
  public searchText: string = '';
  public chart;
  @ViewChild('canvasRef') canvasRef: ElementRef;
  @ViewChild('canvasRefBar') canvasRefBar: ElementRef;
  @ViewChild('canvasRefSemi') canvasRefSemi: ElementRef;

  constructor(private myService: AjaxService ) {
    this.getAPIData();
  }

  public search(value) {
    this.searchText = value;
  }

  public getAPIData(): void {
    this.myService.send('getData').subscribe(data => {
      this.table_data = data;
      this.totalRec = this.table_data.length;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.doughnutChart();
      this.barChart();
      this.semiDoughnutChart();
    }, 1500);
  }

  public countOrganization(): any {
    var count = 0;
    let total = this.table_data.reduce((acc, item) => {
      if(item['type'] !== 'User'){
        ++count;
       }
      return count;
    });
    return total;
  }

  public countAdmin(): any{
    var count = 0;
    let total = this.table_data.reduce((acc, item) => {
      if(item['site_admin'] !== false){
        ++count;
      }
      return count;
    });
    return total;
  }

  public barChart(): void {
    let ctx = this.canvasRefBar.nativeElement.getContext('2d');
    this.canvasRefBar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Total", "Users", "Organizations", "Site Admin", "Others"],
        datasets: [
          {
            label: "Count",
            data: [
              this.totalRec,
              this.totalRec - this.countOrganization(),
              this.countOrganization(),
              this.countAdmin(),
              this.totalRec - this.countAdmin()
            ],
            backgroundColor: [
              'rgb(46, 64, 83)',
              'rgb(244, 208, 63)',
              'rgb(142, 68, 173)',
              'rgb(220, 118, 51)',
              'rgb(231, 76, 60)'
            ],
          },
        ]
      },
      options:{
        responsive: true,
        title: {
          display: true,
          text: "Count Estimates",
          fontSize: 16
        },
        legend: {
          display: false
        }
      }
    });
  }

  public doughnutChart(){
    let ctx = this.canvasRef.nativeElement.getContext('2d');
    this.canvasRef = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Users',
          'Organizations'
        ],
        datasets: [
          {
            data: [this.totalRec - this.countOrganization(), this.countOrganization()],
            backgroundColor: [
              'rgb(2, 125, 221)',
              'rgb(216, 21, 0)'
            ],
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        cutoutPercentage: 80,
        title: {
          display: true,
          text: "Login type",
          fontSize: 16
        }
      },
    });
  }

  public semiDoughnutChart(){
    let ctx = this.canvasRefSemi.nativeElement.getContext('2d');
    this.canvasRefSemi = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Active users',
          'Inactive Users',
        ],
        datasets: [
          {
            data: [this.totalRec, 40-this.totalRec],
            backgroundColor: [
              'rgb(76, 252, 0)',
              'rgb(216, 21, 0)',
            ],
            fill: true
          }
        ]
      },
      options: {
        circumference: Math.PI,
        responsive: true,
        rotation: -Math.PI,
        cutoutPercentage: 80,
        title: {
          display: true,
          text: "Active Users(Estimated Total Users: 40)",
          fontSize: 16
        },
      }
    });
  }
}

