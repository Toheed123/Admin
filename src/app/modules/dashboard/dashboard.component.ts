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

    
  
}