import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OfferComponent } from './components/offer/offer.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterimagesPipe } from './components/portfolio/filterimages.pip';
import { ImageService } from './components/portfolio/image.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ServicesComponent,
    PortfolioComponent,
    OfferComponent,
    FooterComponent,
    FilterimagesPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [ ImageService, FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
