import { Component } from '@angular/core'
import { SharedService } from 'src/app/core/service/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/service/notification.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component( {
    selector: 'app-sidemenu',
    templateUrl : './sidemenu.component.html',
    styleUrls : [ './sidemenu.component.scss' ]

})

export class SideMenuComponent {

    menuItems = [
        {
            name : 'Dashboard',
            navigationUrl : 'dashboard',
            IconClass : 'Material',
            IconName: 'dashboard'
        },
        {
            name : 'Products',
            navigationUrl : 'products',
            IconClass : 'Material',
            IconName: 'view_module'
        },
        {
            name : 'Order',
            navigationUrl : 'order',
            IconClass : 'Material',
            IconName: 'add_shopping_cart'
        }
    ]

    constructor(
        private sharedService: SharedService,
        private router : Router,
        private route : ActivatedRoute,
        private notificationService : NotificationService,
        private snackBarService : MatSnackBar        
    ) {

    }

    ngOnInit(){
        this.sharedService.sideMenuName.subscribe((val) => {
        });
    }

    navigate(name: string) {
        this.sharedService.sideMenuName.next(name);
        let url = name.toLowerCase();        
        this.router.navigate([url], {relativeTo: this.route})
        this.snackBarService.open('Added successfully!!!', '',{
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration : 100 * 1000,
            panelClass: ['warning']
          })
    }
}