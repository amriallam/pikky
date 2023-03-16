import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesProductsComponent } from './clothes-products/clothes-products.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [ClothesProductsComponent, InfoComponent],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
