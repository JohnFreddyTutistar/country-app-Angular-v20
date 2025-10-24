import { Component } from '@angular/core';
import { ListComponent } from "../../../shared/components/list/list";
import { SearchInputComponent } from "../../../shared/components/search-input/search-input";

@Component({
  selector: 'app-by-country-page',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './by-country-page.html',
})
export class ByCountryPageComponent { }
