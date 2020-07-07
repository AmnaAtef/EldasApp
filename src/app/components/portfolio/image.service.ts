import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "brand": "webdesign" ,"url": "assets/img/boat_01.jpeg" },    
    { "id": 2, "brand": "webdesign" ,"url": "assets/img/boat_02.jpeg" },    
    { "id": 3, "brand": "webdesign" ,"url": "assets/img/boat_03.jpeg" },    
    { "id": 4, "brand": "branding" ,"url": "assets/img/boat_04.jpeg" },    
    { "id": 5, "brand": "development" , "url": "assets/img/boat_05.jpeg" },    
    { "id": 6, "brand": "typo", "url": "assets/img/camping_01.jpeg" },    
    { "id": 7, "brand": "development" ,"url": "assets/img/camping_02.jpeg" },    
    { "id": 8, "brand": "typo" , "url": "assets/img/camping_03.jpeg" }

]