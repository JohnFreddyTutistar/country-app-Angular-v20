import { Component } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input";
import { ListComponent } from "../../../shared/components/list/list";

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {

  onSearch(value: string){
    console.log({value})
  }

}
