import { Injectable } from '@angular/core';
import { ContableRegistry } from '../contable-registry';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpendServiceService {
  expends: ContableRegistry[] = [];
  constructor() { }

  public addExpend(exp: ContableRegistry): Observable<ContableRegistry[]> {
    this.expends.push(exp);
    return of(this.expends);
  }
}
