import { Component, inject } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input";
import { ListComponent } from "../../../shared/components/list/list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  onSearch(value: string){
    this.countryService.searchByCapital(value).
      subscribe(res => {
        // if(value === ){

        // }
      })
  }

}
