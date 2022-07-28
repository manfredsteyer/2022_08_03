import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'login',
    loadChildren: () =>
  loadRemoteModule({
    remoteEntry: 'http://localhost:4201/default-apps_login_src_app_remote-entry_entry_module_ts.js',
    remoteName: 'login',
    exposedModule: './Module',
  }).then((m) => {
    return m.MicrofrontendModule;
  }),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
