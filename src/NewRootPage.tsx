import React from 'react';
import { PluginPage } from '@grafana/runtime';

export function NewRootPage() {
  const pageNav = {
    text: 'My cool page',
  };

  return <PluginPage pageNav={pageNav}>hello</PluginPage>;
}
