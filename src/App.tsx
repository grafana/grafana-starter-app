import { AppRootProps } from '@grafana/data';
import { CatalogPage } from './pages/CatalogPage';
import { CanvasPage } from './pages/CanvasPage';
import { ItemPage } from './pages/ItemPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { config } from '@grafana/runtime';
import { useNavModel } from 'utils/hooks';
import { PLUGIN_URL_PATH } from 'types';

export function App(props: AppRootProps) {
  if (!config.featureToggles.topnav) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useNavModel(props);
  }

  return (
    <Switch>
      <Route exact path={`${PLUGIN_URL_PATH}/catalog`} component={CatalogPage} />
      <Route exact path={`${PLUGIN_URL_PATH}/catalog/:id?`} component={ItemPage} />
      <Route exact path={`${PLUGIN_URL_PATH}/canvas`} component={CanvasPage} />
    </Switch>
  );
}
