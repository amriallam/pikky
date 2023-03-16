import { Component } from '@angular/core';
import { Clothes } from 'src/app/classes/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
@Component({
  selector: 'app-clothes-products',
  templateUrl: './clothes-products.component.html',
  styleUrls: ['./clothes-products.component.css']
})
export class ClothesProductsComponent {
    products:Clothes[];
    constructor(private clothesService:ClothesService){
      this.products=this.clothesService.getAllClothes();
    }
}
