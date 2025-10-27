import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input";
import { ListComponent } from "../../../shared/components/list/list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>('null');
  countries = signal<Country[]>([]);

  onSearch(value: string){

    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(value).
      subscribe({
        next: ( countries ) => {
          this.isLoading.set(false);
          this.countries.set(countries)
        },
        error: ( err ) => {
          this.isLoading.set(false);
          this.countries.set([]);
          this.isError.set(err);
        }
      })
  }

}
