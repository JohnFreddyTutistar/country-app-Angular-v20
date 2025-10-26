import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../../country/interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'list',
  imports: [ DecimalPipe ],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  countries = input.required<Country[]>();

}
