import { AppRootProps } from '@grafana/data';
import { pages } from 'pages';
import React, { useEffect, useMemo } from 'react';
import { useNavModel } from 'utils/hooks';

export const ExampleRootPage = React.memo(function ExampleRootPage(props: AppRootProps) {
  const {
    path,
    onNavChanged,
    query: { tab },
    meta,
  } = props;
  // Required to support grafana instances that use a custom `root_url`.
  const pathWithoutLeadingSlash = path.replace(/^\//, '');

  // Update the navigation when the tab or path changes
  const navModel = useNavModel(
    useMemo(() => ({ tab, pages, path: pathWithoutLeadingSlash, meta }), [meta, pathWithoutLeadingSlash, tab])
  );
  useEffect(() => {
    onNavChanged(navModel);
  }, [navModel, onNavChanged]);

  const Page = pages.find(({ id }) => id === tab)?.component || pages[0].component;
  return <Page {...props} path={pathWithoutLeadingSlash} />;
});
