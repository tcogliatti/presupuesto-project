import { Injectable } from '@angular/core';
import { ContableRegistry } from '../contable-registry';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpendServiceService {

  private _expends: ContableRegistry[] = [
    {
      id: 4,
      type: "expend",
      description: "Gastos de hogar",
      amount: 1500
    },
    {
      id: 5,
      type: "expend",
      description: "Compra de muebles",
      amount: 25800
    },
    {
      id: 6,
      type: "expend",
      description: "Gastos de oficina",
      amount: 1500
    },
    {
      id: 7,
      type: "expend",
      description: "Almuerzos",
      amount: 18700
    },
  ];
  private _totalExpend = 0;

  expendsList: BehaviorSubject<ContableRegistry[]> = new BehaviorSubject(this._expends);
  totalExpend: BehaviorSubject<number> = new BehaviorSubject(this._totalExpend);

  constructor() {
    this.calculateTotal();
   }

  public addExpend(exp: ContableRegistry) {
    this._expends.push(exp);
    this.expendsList.next(this._expends);
    this.calculateTotal();
  }

  removeItem(exp: ContableRegistry) {
    this._expends = this._expends.filter(item => item !== exp);
    this.expendsList.next(this._expends);
    this.calculateTotal();
  }

  private calculateTotal(): void {
    let total: number = 0;
    this._expends.forEach(item => {
      total += item.amount;
    });
    this._totalExpend = total;
    this.totalExpend.next(this._totalExpend);
  }

  ngOnInit() {
    this.calculateTotal();
  }
}
