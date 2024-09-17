import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'login',
  exposes: {
    './Routes': 'remotes/login/src/app/app.routes.ts',
    // './Component': 'remotes/login/src/app/remote-entry/nx-welcome.component.ts'
  },
};

export default config;
