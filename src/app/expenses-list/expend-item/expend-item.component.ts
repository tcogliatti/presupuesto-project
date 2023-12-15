import { Component, Input, SimpleChanges } from '@angular/core';
import { ContableRegistry } from '../../contable-registry';
import { ExpendServiceService } from '../../services/expend-service.service';
import { Observable, Subscription } from 'rxjs';

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

  expensesTotal$: Observable<number>;
  avgTotalExpenses: number = 0;
  private expensesTotalSubscription: Subscription;


  constructor(private expensesService: ExpendServiceService) {
    this.expensesTotal$ = this.expensesService.totalExpend.asObservable();
    this.expensesTotalSubscription = this.expensesTotal$.subscribe((total: number) => this.calculateAvg(total));
    
  }

  removeIncome(exp: ContableRegistry) {
    this.expensesService.removeItem(exp);
  }

  calculateAvg(total: number){
    if (total !== 0) {
      this.avgTotalExpenses = (this.expend.amount / total) * 100;
      this.avgTotalExpenses = Math.round(this.avgTotalExpenses * 100) / 100;
    } else {
      this.avgTotalExpenses = 0;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["expend"]) {
      this.calculateAvg(this.expensesService.totalExpend.value);
    }
  }
}
