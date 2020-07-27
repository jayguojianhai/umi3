/**
 * author     : jayguo
 * createTime : 2018-11-15 13:52
 */
import webpackplugin from './plugin.config';
import pageRoutes from './router.config';

export default {
  antd: {},
  dva: {
    hmr: true,
  },
  // polyfills: ['ie9'],
  locale: {
    default: 'zh-CN',
  },
  outputPath: './dist_pc',
  chainWebpack: webpackplugin,
  routes: pageRoutes,
  hash: true,
  ignoreMomentLocale: true
};
