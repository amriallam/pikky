import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BodyModule } from './body/body.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule,SlickCarouselModule,BodyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
