import { AppRootProps } from '@grafana/data';
import React, { FC } from 'react';

export const A: FC<AppRootProps> = ({ query, path, meta }) => {
  return (
    <div>
      <ul>
        <li>
          <a href={path + '?x=1'}>Change query to 1</a>
        </li>
        <li>
          <a href={path + '?x=AAA'}>Change query to AAA</a>
        </li>
        <li>
          <a href={path + '?x=1&y=2&y=3'}>Put multiple properties into the query</a>
        </li>
      </ul>
      <br />
      QUERY: <pre>{JSON.stringify(query)}</pre>
      <br />
      Stored configuration data:
      <pre>{JSON.stringify(meta.jsonData)}</pre>
    </div>
  );
};
