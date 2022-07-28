import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import {StateStore} from './state.store';
import {StateTO} from './stateTO';

@Injectable({
  providedIn: 'root'
})
export class StateQuery extends Query<StateTO> {

  constructor(
    protected override store: StateStore,
  ) {
    super(store);
  }

}
