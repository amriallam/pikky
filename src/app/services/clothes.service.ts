import { Injectable } from '@angular/core';
import { Clothes } from '../classes/clothes';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private clothes: Clothes[];
  constructor() {
    this.clothes = [
      new Clothes(
        'Graphic Thermal Shirt',
        'Stay warm in style with a cozy thermal fabric & classic AE graphics.',
        450,
        10,
        'American Eagle',
        true,
        ['Meduim', 'XL', 'XXL', 'XXXL'],
        'f3e70959-4930-4b61-b4bd-90d9bd6ad113.jpg',
        ['grey', 'white', 'blue']
      ),
      new Clothes(
        'Nike Club T-Shirt',
        'Solid tone expresses a subtle flair,Straight hemline allows for casual untucked wear,Short sleeves ensure optimum freedom of movement,Tailored from soft fabric for long-wearing comfort,Pairs well with comfortable jeans and footwear for a complete look',
        600,
        20,
        'Nike',
        false,
        ['Small', 'Meduim', 'XL', 'XXL'],
        'N27096296V_1.jpg',
        ['grey', 'white', 'blue']
      ),
      new Clothes(
        'Thermal Shirt',
        'Layer your way in this cozy thermal shirt made from our super soft fabric.',
        300,
        30,
        'American Eagle',
        false,
        ['Meduim', 'XL', 'XXL'],
        'b1cc0a92-b132-430f-9b65-9db855b8be93.jpg',
        ['darkslategray']
      ),
      new Clothes(
        'Neck T-Shirt Black',
        'Soft and lightweight cotton fabric,Crew neckline and short sleeves,Wash according to care label instructions',
        300,
        15,
        'JACK & JONES',
        true,
        ['Small', 'Meduim', 'XXL'],
        'N18516903A_1.jpg',
        ['black', 'white']
      ),
      new Clothes(
        'Pique Polo Shirt',
        'Slim fit style that keeps you looking and feeling cool. Tipped for a touch of extra detail.',
        350,
        12,
        'American Eagle',
        true,
        ['Meduim', 'XL'],
        'c4734894-fc8f-4658-81b5-29e29c3843b1.jpg',
        ['red', 'white', 'cyan']
      ),
      new Clothes(
        'Classic White Tee',
        'A simple and comfortable white t-shirt',
        19.99,
        50,
        'Gildan',
        true,
        ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large'],
        'gildan_G500_white.jpg',
        ['White']
      ),
      new Clothes(
        'Black Graphic Tee',
        'A black t-shirt with a bold graphic design',
        24.99,
        30,
        'H&M',
        false,
        ['Small', 'Medium', 'Large'],
        'hmgoepprod.jpeg',
        ['Black']
      ),
      new Clothes(
        'Navy Blue Polo',
        'A stylish navy blue polo shirt',
        29.99,
        20,
        'Ralph Lauren',
        true,
        ['Medium', 'Large', 'X-Large'],
        's7-1368938_alternate10.jpg',
        ['Navy Blue']
      ),
      new Clothes(
        'Gray Henley',
        'A comfortable gray henley shirt',
        17.99,
        60,
        'Old Navy',
        false,
        ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large'],
        'cn50671077.webp',
        ['Gray']
      ),
      new Clothes(
        'Red Striped Tee',
        'A red and white striped t-shirt',
        22.99,
        40,
        'Gap',
        true,
        ['Small', 'Medium', 'Large'],
        '1250161-z.jpg',
        ['Red', 'White']
      ),
      new Clothes(
        'Green V-Neck Tee',
        'A comfortable green v-neck t-shirt',
        16.99,
        50,
        'American Apparel',
        false,
        ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large'],
        '2456W_OLIVE_front.jpg',
        ['Green']
      ),
      new Clothes(
        'Blue Pocket Tee',
        'A blue t-shirt with a front pocket',
        19.99,
        35,
        'J.Crew',
        true,
        ['Small', 'Medium', 'Large', 'X-Large'],
        's-l1600.jpg',
        ['Blue']
      ),
      new Clothes(
        'Yellow Tank Top',
        'A bright yellow tank top for warm weather',
        14.99,
        25,
        'Forever 21',
        false,
        ['Small', 'Medium', 'Large'],
        '00477989-02.jpg',
        ['Yellow']
      ),
      new Clothes(
        'Purple Raglan Tee',
        'A purple and white raglan t-shirt',
        21.99,
        30,
        'Urban Outfitters',
        true,
        ['Small', 'Medium', 'Large', 'X-Large'],
        'Purple Raglan Tee.jpg',
        ['Purple', 'White']
      ),
      new Clothes(
        'Pink Scoop Neck Tee',
        'A comfortable pink scoop neck t-shirt',
        18.99,
        45,
        'Hollister',
        false,
        ['Small', 'Medium', 'Large', 'X-Large'],
        'Pink Scoop Neck Tee.jpg',
        ['Pink']
      ),
    ];
  }
  public getFeatured(): Clothes[] {
    return this.clothes.filter((element) => element.featured == true);
  }
  public getAllClothes(): Clothes[] {
    return this.clothes;
  }
  public getClothe(_id:number):Clothes{
    return this.clothes[_id];
  }
}
