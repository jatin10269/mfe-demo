import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './Routes': 'remotes/products/src/app/app.routes.ts',
  },
};

export default config;
