# Trying to use a shared library outside NX with ModuleFederation

**nx-mf1** is a NX repo which has a Host and a Remote that successfully share a library "store" which is also published to npm
https://www.npmjs.com/package/@keygjones/store

**standaloneshell** is a host that is trying too consume the login remote from the NX library and too share the state in thge store
