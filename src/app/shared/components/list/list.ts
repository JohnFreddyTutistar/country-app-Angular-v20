import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'list',
  imports: [],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
