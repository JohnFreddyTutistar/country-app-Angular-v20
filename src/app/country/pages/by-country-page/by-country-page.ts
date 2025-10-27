import { Component, inject, signal } from '@angular/core';
import { ListComponent } from "../../../shared/components/list/list";
import { SearchInputComponent } from "../../../shared/components/search-input/search-input";
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './by-country-page.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>('null');
  countries = signal<Country[]>([]);

  onSearch(value: string){

    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCountry(value)
      .subscribe({
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
