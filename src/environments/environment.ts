import { buildEnvironment, Environment } from './environment.model';

export const environment: Environment = buildEnvironment({
  production: false,
  emulator: true
});
