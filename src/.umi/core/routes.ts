// @ts-nocheck
import { ApplyPluginsType } from '/Users/jayguo/project/umi3/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('/Users/jayguo/project/umi3/src/layouts').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
