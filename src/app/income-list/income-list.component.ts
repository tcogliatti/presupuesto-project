import { Component } from '@angular/core';
import { ContableRegistry as ContableRegistry } from '../contable-registry';
import { IncomeServiceService } from '../services/income-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrl: './income-list.component.scss'
})
export class IncomeListComponent {

  incomesList$: Observable<ContableRegistry[]>;

  constructor(private incomeService: IncomeServiceService) {
    this.incomesList$ = incomeService.incomeList.asObservable();
  }
}
