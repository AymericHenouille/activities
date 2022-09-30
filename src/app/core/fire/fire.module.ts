import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';
import { USE_EMULATOR as USE_STORAGE_EMULATOR } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  provideFirebaseApp(() => initializeApp(environment.firebase)),
];

function useValue(port: number): [string, number] | undefined {
  return !environment.production ? ['localhost', port] : undefined;
}

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
  providers: [
    { provide: USE_AUTH_EMULATOR, useValue: useValue(9099) },
    { provide: USE_FIRESTORE_EMULATOR, useValue: useValue(8080) },
    { provide: USE_FUNCTIONS_EMULATOR, useValue: useValue(5001) },
    { provide: USE_STORAGE_EMULATOR, useValue: useValue(9199) },
  ]
})
export class FireModule { }
