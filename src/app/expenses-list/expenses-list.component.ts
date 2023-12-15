import { Component } from '@angular/core';
import { ContableRegistry } from '../contable-registry';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.scss'
})


export class ExpensesListComponent {
  expenses: ContableRegistry [] = [];

  constructor(){
    this.expenses = [
      {
        id: 4,
        type: "expend",
        description: "Gastos de oficina",
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
    ]
  }
}
