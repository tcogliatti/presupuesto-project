import { Component, NgModule } from '@angular/core';
import { IncomeServiceService } from '../services/income-service.service';
import { ContableRegistry } from '../contable-registry';
import { ExpendServiceService } from '../services/expend-service.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrl: './input-data.component.scss'
})

export class InputDataComponent {
  
  amount: number = 0;
  desc: string = '';
  tipoDeGastoSeleccionado: string = '';

  constructor(
    private incomeService: IncomeServiceService, 
    private expenseService: ExpendServiceService
  ){}

  addRow(): void {
    if (this.tipoDeGastoSeleccionado != '' &&
      this.desc != '' &&
      this.amount != 0) {
        const newAccount: ContableRegistry = 
        {
          id: 9,
          type: this.tipoDeGastoSeleccionado,
          description: this.desc,
          amount: this.amount,
        };
        if(this.tipoDeGastoSeleccionado == "income")
          this.incomeService.addIncome(newAccount);
        else
          this.expenseService.addExpend(newAccount)
      }
  }

  seleccionarTipoGasto(tipo: string) {
    this.tipoDeGastoSeleccionado = tipo;
  }
}
