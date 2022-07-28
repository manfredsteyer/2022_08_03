import {Component, OnInit} from '@angular/core';
import {StateQuery, StateStore} from '@keygjones/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

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
