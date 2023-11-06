import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { SharedService } from './core/service/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sticher';
  iconName: string = '';
  name: string = ''
  constructor (
    private sharedService : SharedService

  ){}

  ngOnInit(){    
    this.sharedService.sideMenuName.subscribe ((val) => {
      console.log('value is' + val)
      this.iconName = val.toLowerCase();
      this.name = val.toUpperCase();
    })
  }
}
