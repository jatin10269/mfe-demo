import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product-search',
  exposes: {
    './Routes': 'apps/product-search/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
