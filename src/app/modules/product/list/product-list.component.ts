import { Component} from '@angular/core';

interface Transaction {
    item: string;
    cost: number;
  }

@Component({
    selector : ' app-productList',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.scss']
})


export class ProductListComponent{
    displayedColumns: string[] = ['item' , 'cost' ];
    transactions: Transaction[] = [
      {item: 'Beach ball', cost: 4},
      {item: 'Towel', cost: 5},
      {item: 'Frisbee', cost: 2},
      {item: 'Sunscreen', cost: 4},
      {item: 'Cooler', cost: 25},
      {item: 'Swim suit', cost: 15},
    ];
}