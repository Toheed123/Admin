import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent {
    dashboardContent = [
        {
            imagename: 'totalsales.png',
            name: 'Total Sale',
            Count: 300000,
            amountYN: true

        },
        {
            imagename: 'totalorder.png  ',
            name: 'Total Orders',
            Count: 1230,
            amountYN: false

        },
        {
            imagename: 'totalptoduct.png',
            name: 'Total Products',
            Count: 5000,
            amountYN: false

        },
        {
            imagename: 'pendingreq.png',
            name: 'Pending Request',
            Count: 25,
            amountYN: false

        }
    ];
    title = 'ng-chart';
    chart: any = [];
    chartData: any;
    labelName = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
    
    constructor() {      
    }

    ngOnInit() {
        this.createChart();
        this.chart = new Chart('barchart', {
            type: 'bar',
            data: this.chartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    createChart(){
        this.chartData = {
            labels: this.labelName,
            datasets: [
                {
                    label: 'Sales Status',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }
            ]
        }
    }

}