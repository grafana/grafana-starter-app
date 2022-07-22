import { ComponentClass } from 'react';
import { ExampleConfigCtrl } from './legacy/config';
import { AppPlugin, AppRootProps } from '@grafana/data';
import { RootPage } from './RootPage';
import { ExampleAppSettings } from './types';

export { ExampleConfigCtrl as ConfigCtrl };

export const plugin = new AppPlugin<ExampleAppSettings>().setRootPage(
  RootPage as unknown as ComponentClass<AppRootProps<ExampleAppSettings>>
);
// .addConfigPage({
//   title: 'Page 1',
//   icon: 'info-circle',
//   body: ExamplePage1,
//   id: 'page1',
// });
