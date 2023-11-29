import { Component } from '@angular/core'
import { SharedService } from 'src/app/core/service/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
    selector: 'app-sidemenu',
    templateUrl : './sidemenu.component.html',
    styleUrls : [ './sidemenu.component.scss' ]

})

export class SideMenuComponent {

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