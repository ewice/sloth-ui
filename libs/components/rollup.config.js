const { withNx } = require('@nx/rollup/with-nx');
const css = require('rollup-plugin-import-css');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/libs/components',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['cjs', 'esm'],
    assets: [{ input: '.', output: '.', glob: '*.md' }],
  },
  {
    plugins: [css()],
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);
