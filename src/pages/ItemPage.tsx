import { PluginPage } from '@grafana/runtime';
import { Field, FieldSet, Input } from '@grafana/ui';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { items } from './CatalogPage';

export function ItemPage(props: RouteComponentProps<{ id: string }>) {
  const index = parseInt(props.match.params.id, 10);
  const item = items[index];
  const pageNav = { text: item.title, subTitle: 'Edit data center details' };

  return (
    <PluginPage pageNav={pageNav}>
      <FieldSet>
        <Field label="Name">
          <Input value={item.title} />
        </Field>
        <Field label="Description">
          <Input value={item.description} />
        </Field>
      </FieldSet>
    </PluginPage>
  );
}
