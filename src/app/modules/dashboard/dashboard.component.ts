import { Component} from '@angular/core'

@Component({
    selector : 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent {
    dashboardContent  = [
        {
            imagename : 'totalsales.png',
            name: 'Total Sale',
            Count : 300000,
            amountYN : true

        },
        {
            imagename : 'totalorder.png  ',
            name: 'Total Orders',
            Count : 1230,
            amountYN : false

        },
        {
            imagename : 'totalptoduct.png',
            name: 'Total Products',
            Count : 5000,
            amountYN : false

        },
        {
            imagename : 'pendingreq.png',
            name: 'Pending Request',
            Count : 25,
            amountYN : false

        }
    ]

    GraphData = [
        {
            date: 'Jan 2023',
            amount: 2300
        },
        {
            date: 'Feb 2023',
            amount: 40000
        },
        {
            date: 'March 2023',
            amount: 67500
        }
    ]

  dataPoints:any = [];
  chart:any;
 
  constructor() {  
    for(let i= 0 ; i >= 10; i++){

        this.dataPoints.push({x: 10, y: 49 });
    }
  }
 
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:"Sales Status"
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
    //   title: "Closing Price (in USD)",
      prefix: "$"
    },
    data: [{
      type: "line",
    //   name: "Closing Price",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }
 
  getChartInstance(chart: object) {
    this.chart = chart;
  }
}