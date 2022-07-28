import { Component } from '@angular/core';
import {StateQuery} from '@keygjones/store';
@Component({
  selector: 'ng-mf-login-entry',
  template: `
    <div style="background-color: aqua">
      Remote - {{stateQuery.select() | async | json}}
    </div>
  `,
})
export class RemoteEntryComponent {

  constructor(public stateQuery: StateQuery) {}

}
