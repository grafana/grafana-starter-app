import { PluginPage } from '@grafana/runtime';
import { Card, VerticalGroup } from '@grafana/ui';
import React from 'react';

export const items = [
  {
    title: 'Data center EU',
    description: 'Pretty ok but messy.',
  },
  {
    title: 'Data center USA',
    description: 'A bit unstable',
  },
  {
    title: 'Data center Austrailia',
    description: 'Smartest server',
  },
];

export function CatalogPage() {
  return (
    <PluginPage>
      <VerticalGroup>
        {items.map((item, index) => (
          <Card href={`/a/myorgid-simple-app/items/${index}`} key={index}>
            <Card.Heading>{item.title}</Card.Heading>
            <Card.Description>{item.description}</Card.Description>
          </Card>
        ))}
      </VerticalGroup>
    </PluginPage>
  );
}
