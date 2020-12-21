import { BillService } from './../../services/bill.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Thấng 4', 'Tháng 5', 'Tháng 6', 
                                      'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    private bill: BillService
  ) { }

  ngOnInit(): void {
    this.bill.getChart().subscribe((data: any) =>{
      this.lineChartData = [
        { data: data, label: 'Doanh thu(nghìn đồng)' },
      ];
    })
  }

}
