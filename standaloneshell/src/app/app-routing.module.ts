import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'login',
    loadChildren: () =>
  loadRemoteModule({
    // Since Angular 13, the CLI emits "real" modules
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
    exposedModule: './Module',
  }).then((m) => {
    return m.RemoteEntryModule;
  }),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
