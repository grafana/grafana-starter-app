import { AppRootProps } from '@grafana/data';
import { CatalogPage } from './pages/CatalogPage';
import { GraphPage } from './pages/GraphPage';
import { ItemPage } from './pages/ItemPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const PLUGIN_URL_PATH = '/a/myorgid-simple-app';

export function App(props: AppRootProps) {
  return (
    <Switch>
      <Route exact path={`${PLUGIN_URL_PATH}/`} component={CatalogPage} />
      <Route exact path={`${PLUGIN_URL_PATH}/items/:id?`} component={ItemPage} />
      <Route exact path={`${PLUGIN_URL_PATH}/graph`} component={GraphPage} />
    </Switch>
  );
}
