import { Component } from '@angular/core';
import { Clothes } from '../classes/clothes';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
})
export class BodyComponent  {
  featuredClothes: Clothes[];
  slideConfig :Object;
  constructor(private clothesService: ClothesService) {
    this.featuredClothes = this.clothesService.getFeatured();
    this.slideConfig={"slidesToShow":3,'arrows':false,'mobileFirst':true,'centerMode':true,'variableWidth': true}
  }
}
