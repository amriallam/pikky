import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { InfoComponent } from './body/info/info.component';
const routes: Routes = [
  {path:"home",component:BodyComponent},
  {path:"item/:type/:id",component:InfoComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
