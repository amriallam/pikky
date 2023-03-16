import { Component , OnInit} from '@angular/core';
import { Clothes } from 'src/app/classes/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  item:any;
  type:string;
  constructor(private route:ActivatedRoute,private clothesService:ClothesService){
    this.type='';
  }
  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    switch(this.route.snapshot.params['type']){
      case 'clothes':{
        this.item=this.clothesService.getClothe(this.route.snapshot.params['id']);
        break;
      }
    }
  }
}
