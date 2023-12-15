import { Component } from '@angular/core';
import { ContableRegistry } from '../contable-registry';
import { ExpendServiceService } from '../services/expend-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.scss'
})


export class ExpensesListComponent {
  expensesList$: Observable<ContableRegistry[]>;

  constructor(
    private expendsService: ExpendServiceService) {
      this.expensesList$ = expendsService.expendsList.asObservable();
  }
}
