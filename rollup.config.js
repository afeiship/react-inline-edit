import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
// import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import externals from 'rollup-plugin-node-externals';
import banner from 'rollup-plugin-banner';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';
import '@jswork/next-rollup-banner';

export default [
  {
    input: 'src/main.ts',
    output: {
      file: pkg.main,
      format: 'umd',
      exports: 'named',
      sourcemap: false,
      name: 'ReactInlineEdit',
      globals: {
        '@jswork/noop': 'noop',
        'prop-types': 'PropTypes',
        'classnames': 'classNames',
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      // external(),
      externals({
        // The path(s) to your package.json. Optional.
        // Can be a string or an array of strings for monorepos -- see below
        packagePath: './package.json',

        // Make node builtins external. Optional. Default: true
        builtins: true,

        // Make pkg.dependencies external. Optional. Default: false
        deps: true,

        // Make pkg.peerDependencies external. Optional. Default: true
        peerDeps: true
      }),

      resolve(),
      replace({ __VERSION__: pkg.version, preventAssignment: true }),
      terser({ output: { comments: false } }),
      banner(nx.rollupBanner()),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: ['**/__tests__/**', '**/__stories__/**'],
        clean: true
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'node_modules/react-is/index.js': Object.keys(require('react-is')),
          'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render']
        }
      })
    ]
  },
  {
    input: 'src/components/style.scss',
    output: null,
    plugins: [
      scss({ output: 'dist/style.css' }),
      copy({
        targets: [{ src: 'src/components/style.scss', dest: 'dist' }]
      })
    ]
  }
];
