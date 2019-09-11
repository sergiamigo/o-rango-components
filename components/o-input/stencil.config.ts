import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'o-input',
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer()
      ]
    })
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' },
  ],
};
