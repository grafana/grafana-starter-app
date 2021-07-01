import React from 'react';
import { AppRootProps } from '@grafana/data';
import { ExampleAppSettings } from 'types';

export const PageAAA = (props: AppRootProps<ExampleAppSettings>) => {
  return <div>AAAAAA: {new Date().toISOString()}</div>;
};
