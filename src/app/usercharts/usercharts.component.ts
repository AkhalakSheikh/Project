import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../material/Material module';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserServices } from '../signalstore/user.store';

@Component({
  selector: 'app-usercharts',
  standalone: true,
  imports: [MaterialModule, CommonModule,HighchartsChartModule],
  templateUrl: './usercharts.component.html',
  styleUrl: './usercharts.component.scss'
})
export class UserchartsComponent implements OnInit{

  linecount:any = [];

  Highcharts: typeof Highcharts = Highcharts;
  columnchart: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'column Chart'
    },
    xAxis: {
      categories: ['Users']
    },
    yAxis: {
      title: { text: 'Number of Records' },
      allowDecimals: false
    },
    series: [
      {
        name: 'Total Users',
        type: 'column',
        data: [0]
      }
    ]
  };

  linechart: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Line Chart'
    },
    xAxis: {
      categories: ['Users']
    },
    yAxis: {
      title: { text: 'Number of Records' },
      allowDecimals: false
    },
    series: [
      {
        name: 'Total Users',
        type: 'line',
        data: []
      }
    ]
  };

  constructor(public userservices:UserServices){
  }
  
  

 ngOnInit(){

  this.userservices.userdatacount.subscribe((value:any)=>{
     this.columnchart = {
      ...this.columnchart,
      series: [{
        name: 'Total Users',
        type: 'column',
        data: [value]
      }]
    };

    this.linecount = [];
    
    for(let i=1;i<=value;i++){
       this.linecount.push(i);
    }

    this.linechart = {
      ...this.linechart,
      series: [{
        name: 'Total Users',
        type: 'line',
        data: this.linecount
      }]
    };
  })
}

}
