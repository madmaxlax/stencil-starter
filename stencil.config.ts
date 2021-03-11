import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "max",
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    // {
    //   type: 'www',
    //   // comment the following line to disable service workers in production
    //   serviceWorker: null,
    //   baseUrl: 'https://myapp.local/',
    // },
    {
      type: 'dist'
    },
    reactOutputTarget({ 
      componentCorePackage: 'react-stencil-components',
      proxiesFile: '../react-stenciljs-poc/src/components/stencil/stencilcomponents.ts',
      includeDefineCustomElements: true,
      loaderDir: 'dsf'
    }),
  ],
};