import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product-detail',
  exposes: {
    './Routes': 'remotes/product-detail/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
