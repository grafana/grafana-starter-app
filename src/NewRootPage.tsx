import React from 'react';
import { PluginPage, PluginPageLayout } from '@grafana/runtime';
import { AppRootProps } from '@grafana/data';
import { pages } from 'pages';

export function NewRootPage(props: AppRootProps) {
  const { query } = props;

  // const activePage = navModel.main.children.find((x) => x.active)!;
  const Page = pages.find(({ id }) => id === query.tab)?.component || pages[0].component;

  return (
    <PluginPage pageNav={{ text: 'Poop', hideFromBreadcrumbs: true }}>
      <Page {...props} />
    </PluginPage>
  );
}
