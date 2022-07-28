import { Component, OnInit } from '@angular/core';
import {StateQuery, StateStore} from '@keygjones/store';
@Component({
  selector: 'nx-mf1-root',
  template: `
    <div class="dashboard-nav">Service test</div>
    <router-outlet></router-outlet>
    <button (click)="updateState()">Update state</button>
    {{stateQuery.select() | async | json}}
  `,
})
export class AppComponent implements OnInit {

  constructor(
    private stateStore: StateStore,
    public stateQuery: StateQuery

  ) {}
  ngOnInit() {
    this.stateStore.update({value: "Dashboard update"})
  }

  updateState() {
    this.stateStore.update({value: "Dashboard updated Value"})
  }
}
