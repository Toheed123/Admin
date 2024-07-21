import { Component } from '@angular/core'
import { SharedService } from 'src/app/core/service/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

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
        private route : ActivatedRoute
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
    }
}