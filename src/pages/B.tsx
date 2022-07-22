import React from 'react';
import { AppRootProps } from '@grafana/data';
import { ExampleAppSettings } from 'types';

export const PageBBB = (props: AppRootProps<ExampleAppSettings>) => {
  return <div>BBBBBB: {new Date().toISOString()}</div>;
};
