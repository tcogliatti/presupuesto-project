import { Injectable } from '@angular/core';
import { ContableRegistry } from '../contable-registry';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeServiceService {

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

  constructor() { }

  public addIncome(inc: ContableRegistry){
    this._incomes.push(inc);
    this.incomeList.next(this._incomes);
  }
  public removeIncome(incomeRow: ContableRegistry) {
    this._incomes = this._incomes.filter(item => item !== incomeRow);
    this.incomeList.next(this._incomes);
  }
}
