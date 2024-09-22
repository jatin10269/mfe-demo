import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Routes': 'remotes/cart/src/app/app.routes.ts',
  },
};

export default config;
