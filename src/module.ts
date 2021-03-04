import { ComponentClass } from 'react';
import { ExampleConfigCtrl } from './legacy/config';
import { AppPlugin, AppRootProps } from '@grafana/data';
import { ExamplePage1 } from './config/ExamplePage1';
import { ExamplePage2 } from './config/ExamplePage2';
import { ExampleRootPage } from './ExampleRootPage';
import { ExampleAppSettings } from './types';

export { ExampleConfigCtrl as ConfigCtrl };

export const plugin = new AppPlugin<ExampleAppSettings>()
  .setRootPage((ExampleRootPage as unknown) as ComponentClass<AppRootProps>)
  .addConfigPage({
    title: 'Page 1',
    icon: 'info-circle',
    body: ExamplePage1,
    id: 'page1',
  })
  .addConfigPage({
    title: 'Page 2',
    icon: 'user',
    body: ExamplePage2,
    id: 'page2',
  });
