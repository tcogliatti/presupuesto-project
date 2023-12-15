import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { InputDataComponent } from './input-data/input-data.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpendItemComponent } from './expenses-list/expend-item/expend-item.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeItemComponent } from './income-list/income-item/income-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InputDataComponent,
    IncomeListComponent,
    ExpensesListComponent,
    ExpendItemComponent,
    IncomeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
