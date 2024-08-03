import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username = "Martha"
  itemname = "Pencils"
  setStatus:string = "No"
  getStockStatus(){
    return this.setStatus
  }
  isSoldOut = false
  // set button to be disabled in 5 second
  constructor(){
    setTimeout(()=>{
      this.isSoldOut = true
    },5000)
  }
  // event binding
  onSave(){
    alert('Information saved!')
  }
  productmsg:string = ""
  total_in_stock = 3
  total_added = 0
  outStock = ""
  btn_out_stock = false
  addProduct(){
    if(this.total_in_stock > 0){
    this.total_added ++ 
    this.total_in_stock --
    }
    else {
      this.outStock = "Item is out of stock"
      this.btn_out_stock = true
    }
  }
}


