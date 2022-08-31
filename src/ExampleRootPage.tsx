import { AppRootProps } from '@grafana/data';
import { pages } from 'pages';
import React, { useEffect } from 'react';
import { useNavModel } from 'utils/hooks';

export const ExampleRootPage = React.memo(function ExampleRootPage(props: AppRootProps) {
  const {
    onNavChanged,
    query: { tab },
    meta,
  } = props;

  // Update the navigation when the tab or path changes
  const navModel = useNavModel({ tab, pages, meta });

  useEffect(() => {
    onNavChanged(navModel);
  }, [navModel, onNavChanged]);

  const Page = pages.find(({ id }) => id === tab)?.component || pages[0].component;
  return <Page {...props} />;
});
