import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  // Since Angular 13, we need type: 'module'
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.mjs', 
  })
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
