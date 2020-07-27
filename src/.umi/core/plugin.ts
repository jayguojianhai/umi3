// @ts-nocheck
import { Plugin } from '/Users/jayguo/project/umi3/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/jayguo/project/umi3/src/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/jayguo/project/umi3/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
