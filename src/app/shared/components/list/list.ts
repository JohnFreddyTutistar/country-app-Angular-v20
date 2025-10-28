import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../../country/interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  countries = input.required<Country[]>();

  errorMessage = input<string>()
  isLoadding   = input<boolean>(false)
  isEmpty      = input<boolean>(false)

}
