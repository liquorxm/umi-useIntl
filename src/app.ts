import { Error, ILayoutRuntimeConfig, LayoutConfig } from '@umijs/plugin-layout';
import Exception403 from '@/pages/exception/403';

export async function getInitialState() {
  console.log('InitialState');
  return {
    role: '100001',
  };
}

/**
 * 支持构建配置和运行时配置
 */
export const layout: ILayoutRuntimeConfig | LayoutConfig = {
  name: 'umi-2020',
  logout: () => { }, // do something
  rightRender: initInfo => {
    return 'hahah';
  }, // return string || ReactNode;
  errorBoundary: {
    onError: (e: Error) => {
      console.log(e);
    },
    ErrorComponent: (e: Error) => {
      console.log(e);
      return Exception403();
    },
  }
};
