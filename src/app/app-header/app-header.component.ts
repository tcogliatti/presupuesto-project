import { Component, SimpleChanges } from '@angular/core';
import { ExpendServiceService } from '../services/expend-service.service';
import { IncomeServiceService } from '../services/income-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  expensesTotal$: Observable<number>;
  private totExpSubscription: Subscription;
  incomeTotal$: Observable<number>;
  private totIncSubscription: Subscription;
  neto: number = 0;
  percent: number = 0;


  constructor(
    private incomeService: IncomeServiceService,
    private expensesService: ExpendServiceService
  ) {
    this.expensesTotal$ = this.expensesService.totalExpend.asObservable();
    this.totExpSubscription = this.expensesTotal$.subscribe(() => {
      this.calculatePercent();
      this.calculateTotal()
    });

    this.incomeTotal$ = this.incomeService.totalIncome.asObservable();
    this.totIncSubscription = this.incomeTotal$.subscribe(() => {
      this.calculatePercent();
      this.calculateTotal()
    });
  }

  private calculatePercent() {
    this.expensesTotal$.subscribe(expensesTotal => {
      this.incomeTotal$.subscribe(incomeTotal => {
        if (incomeTotal !== 0) {
          this.percent = (expensesTotal / incomeTotal) * 100;
          this.percent = Math.round(this.percent * 100) / 100;
        } else {
          this.percent = 0;
        }
      });
    });
  }

  private calculateTotal() {
    this.expensesTotal$.subscribe((expensesTotal: number) => {
      this.incomeTotal$.subscribe((incomeTotal: number) => {
        this.neto = incomeTotal - expensesTotal
      });
    });
  }

  ngOnDestroy(): void {
    this.totExpSubscription.unsubscribe();
    this.totIncSubscription.unsubscribe();
  }

}
