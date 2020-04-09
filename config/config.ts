import { defineConfig } from 'umi';
import routes from './route1';
// import routes from './route2';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'umi-useIntl',
  },
  // locale: {
  //   default: 'zh-CN',
  //   antd: true
  // },
  routes,
});
