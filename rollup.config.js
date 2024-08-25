import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-import-css';

export default {
  input: 'src/components.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    css(),
    typescript(),
    replace({ preventAssignment: false, 'Reflect.decorate': 'undefined' }),
    resolve(),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
