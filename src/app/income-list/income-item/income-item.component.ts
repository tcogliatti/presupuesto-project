import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContableRegistry } from '../../contable-registry';
import { IncomeServiceService } from '../../services/income-service.service';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrl: './income-item.component.scss'
})
export class IncomeItemComponent {

  @Input() income: ContableRegistry = {
    id: 0,
    type: '',
    description: '',
    amount: 0.0,
  }
  // @Output()
  //   changeIncome: EventEmitter<ContableRegistry> = new EventEmitter<ContableRegistry>();

  constructor(private incomeService: IncomeServiceService) {

  }

  removeIncome(incomeRow: ContableRegistry): void {
    this.incomeService.removeIncome(incomeRow);
  }
}
