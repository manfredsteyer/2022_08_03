import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import {StateTO} from './stateTO';


export function createInitialState(): any {
    return { loading: true };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'state' })
export class StateStore extends Store<StateTO> {

    constructor() {
      console.log("constructor StateStore")
      super(createInitialState());
    }
}
