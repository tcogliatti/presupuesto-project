import { Component, Input } from '@angular/core';
import { ContableRegistry } from '../../contable-registry';

@Component({
  selector: 'app-expend-item',
  templateUrl: './expend-item.component.html',
  styleUrl: './expend-item.component.scss'
})
export class ExpendItemComponent {
  @Input() expend: ContableRegistry = {
    id: 0,
    type: '',
    description: '',
    amount: 0.0,
  }
}
