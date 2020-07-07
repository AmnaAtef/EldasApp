import { Pipe, PipeTransform } from '@angular/core';    
    
@Pipe({    
  name: 'filterimages'    
})    
export class FilterimagesPipe implements PipeTransform {    
  transform(items: any[], portfolio: string): any {    
    if(portfolio === 'all'){ return items } else    
    return items.filter(item =>{    
      return item.brand === portfolio;    
    });    
  }    
    
}  