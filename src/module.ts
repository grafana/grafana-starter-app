import { ComponentClass } from 'react';
import { AppPlugin, AppRootProps } from '@grafana/data';

import { ExamplePage1 } from './config/ExamplePage1';
import { ExamplePage2 } from './config/ExamplePage2';
import { ExampleRootPage } from './ExampleRootPage';
import { ExampleAppSettings } from './types';

export const plugin = new AppPlugin<ExampleAppSettings>()
  .setRootPage((ExampleRootPage as unknown) as ComponentClass<AppRootProps>)
  .addConfigPage({
    title: 'Page 1',
    icon: 'fa fa-info',
    body: ExamplePage1,
    id: 'page1',
  })
  .addConfigPage({
    title: 'Page 2',
    icon: 'fa fa-user',
    body: ExamplePage2,
    id: 'page2',
  });
