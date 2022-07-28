# Trying to use a shared library outside NX with ModuleFederation

**nx-mf1** is a NX repo which has a Host and a Remote that successfully share a library "store" which is also published to npm
https://www.npmjs.com/package/@keygjones/store

`nx run dashboard:serve:development`
`nx run login:serve:development`

The you should be able to browse to http://localhost:4300/login and see the shared state in action
The remote is loaded via port 4201


**standaloneshell** is a host that is trying too consume the login remote from the NX library and too share the state in thge store

npm starts on http://localhost:4123/ should be able to load the remote login module and share the state aswell?
Some problems here now
