import { buildEnvironment, Environment } from './environment.model';
import { FIREBASE_CONFIGURATION_PROD } from './firebase.config';

export const environment: Environment = buildEnvironment({
  production: true,
  firebase: FIREBASE_CONFIGURATION_PROD
});
