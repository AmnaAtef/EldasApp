import { Component, OnInit, Input, OnChanges } from '@angular/core';    
import { ImageService } from './image.service'; 


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnChanges {

	images:any[];    
  filterBy?: string = 'all'    
 allImages:any[] = [];    
    
  constructor(private imageService: ImageService) {    
    this.allImages = this.imageService.getImages();    
  }    
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    
}   
	  