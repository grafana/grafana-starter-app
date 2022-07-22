import { AppRootProps } from '@grafana/data';
import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { getPageNav, pages } from 'pages';

export const RootPage = React.memo(function CatalogRootPage(props: AppRootProps) {
  const location = useLocation();
  //const query = locationSearchToObject(location.search);

  let { basename } = props;
  if (!basename.endsWith('/')) {
    basename += '/';
  }

  useEffect(() => {
    const sub = location.pathname.substring(basename.length);
    console.log('TODO... nav header: ', sub);
    props.onNavChanged(getPageNav(props, sub));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onNavChanged, props.basename]);

  return (
    <>
      {pages.map((p) => (
        <Route
          exact
          key={p.sub}
          path={`${basename}${p.sub}`}
          render={() => {
            return <p.component {...props} />;
          }}
        />
      ))}
    </>
  );
});
