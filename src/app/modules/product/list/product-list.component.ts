import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  searchForm : FormGroup;
  filteredData : Transaction[]
    column = [
      {columnDefination : 'item', visibleYN : true},
      {columnDefination : 'cost', visibleYN : true},
    ]    

    transactions: Transaction[] = [
      {item: 'Beach ball', cost: 4},
      {item: 'Towel', cost: 5},
      {item: 'Frisbee', cost: 2},
      {item: 'Sunscreen', cost: 4},
      {item: 'Cooler', cost: 25},
      {item: 'Swim suit', cost: 15},
    ];

    constructor(
      private formBuilder: FormBuilder,
    ){
      this.createForm()
      this.filteredData = this.transactions
    }

    createForm(){
      this.searchForm = this.formBuilder.group({
        searchInput : ['',[]]
      })
    }

    getColumnDefination(){
      return this.column.filter((column) => column.visibleYN == true).map((val) => val.columnDefination);
    }

    get searchFormControls(){
      return this.searchForm.controls;
    }

    onSearch(){
      if(this.searchFormControls.searchInput.value){
        console.log(this.searchFormControls.searchInput.value)
        this.filteredData = this.transactions.filter((val) => val.item.toUpperCase().includes(this.searchFormControls.searchInput.value.toUpperCase()))
        console.log(this.filteredData)
      }
    }

    reset(){
      this.searchForm.reset()
      this.filteredData  = this.transactions
    }
}