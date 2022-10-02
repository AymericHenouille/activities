import { FirebaseOptions } from '@angular/fire/app';
import { FIREBASE_CONFIGURATION_DEV } from './firebase.config';

export interface Environment {
  production: boolean;
  emulator: boolean;
  firebase: FirebaseOptions;
}

export function buildEnvironment(environment: Partial<Environment>): Environment {
  return {
    production: false,
    emulator: false,
    firebase: FIREBASE_CONFIGURATION_DEV,
    ...environment,
  };
}
