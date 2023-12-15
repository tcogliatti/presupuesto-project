import { Injectable } from '@angular/core';
import { ContableRegistry } from '../contable-registry';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeServiceService {
  private _totalIncome: number = 0;
  private _incomes: ContableRegistry[] = [
    {
      id: 1,
      type: "income",
      description: "Venta de articulos",
      amount: 8000
    },
    {
      id: 2,
      type: "income",
      description: "Sueldo acreditado",
      amount: 60700
    },
    {
      id: 3,
      type: "income",
      description: "Regalias de Coso",
      amount: 30000
    },
  ];
  incomeList: BehaviorSubject<ContableRegistry[]> = new BehaviorSubject(this._incomes)
  totalIncome: BehaviorSubject<number> = new BehaviorSubject(this._totalIncome);
  constructor() {
    this.calculateTotal();
   }

  public addIncome(inc: ContableRegistry){
    this._incomes.push(inc);
    this.incomeList.next(this._incomes);
    this.calculateTotal();
  }

  public removeIncome(incomeRow: ContableRegistry) {
    this._incomes = this._incomes.filter(item => item !== incomeRow);
    this.incomeList.next(this._incomes);
    this.calculateTotal();
  }

  private calculateTotal(): void {
    let total: number = 0;
    this._incomes.forEach(item => {
      total += item.amount;
    });
    this._totalIncome = total;
    this.totalIncome.next(this._totalIncome);
  }

  ngOnInit() {
    this.calculateTotal();
  }
}
