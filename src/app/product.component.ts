import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  public lists: any[];
  displayData(data) {
    this.lists = data;
  }
}
