import { Component, NgModule } from '@angular/core';
import { IncomeServiceService } from '../services/income-service.service';
import { ContableRegistry } from '../contable-registry';

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
    private incomeService: IncomeServiceService 
  ){}

  addRow(): void {
    if (this.tipoDeGastoSeleccionado != '' &&
      this.desc != '' &&
      this.amount != 0) {
        const newIncome: ContableRegistry = 
        {
          id: 9,
          type: this.tipoDeGastoSeleccionado,
          description: this.desc,
          amount: this.amount,
        };
        this.incomeService.addIncome(newIncome);
      }
  }

  seleccionarTipoGasto(tipo: string) {
    this.tipoDeGastoSeleccionado = tipo;
  }
}
