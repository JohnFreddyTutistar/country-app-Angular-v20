import { Component, input, output } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInputComponent {

  placeholder = input('Buscar')
  value = output<string>()

}
