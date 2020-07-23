// Libraries
import React, { useEffect } from 'react';

// Types
import { NavModelItem, AppRootProps } from '@grafana/data';

interface Props extends AppRootProps {}

const TAB_ID_A = 'A';
const TAB_ID_B = 'B';
const TAB_ID_C = 'C';

export const ExampleRootPage = React.memo(function ExampleRootPage({ path, onNavChanged, query, meta }: Props) {
  useEffect(() => {
    const pathWithoutLeadingSlash = path.replace(/^\//, '');
    const tabs: NavModelItem[] = [];
    tabs.push({
      text: 'Tab A',
      icon: 'fa fa-fw fa-file-text-o',
      url: pathWithoutLeadingSlash + '?tab=' + TAB_ID_A,
      id: TAB_ID_A,
    });
    tabs.push({
      text: 'Tab B',
      icon: 'fa fa-fw fa-file-text-o',
      url: pathWithoutLeadingSlash + '?tab=' + TAB_ID_B,
      id: TAB_ID_B,
    });
    tabs.push({
      text: 'Tab C',
      icon: 'fa fa-fw fa-file-text-o',
      url: pathWithoutLeadingSlash + '?tab=' + TAB_ID_C,
      id: TAB_ID_C,
    });

    const activeTab = query.tab || TAB_ID_B;
    tabs.forEach(tab => (tab.active = activeTab === tab.id));

    const node = {
      text: 'This is the Page title',
      img: meta.info.logos.large,
      subTitle: 'subtitle here',
      url: path,
      children: tabs,
    };

    // Update the page header
    onNavChanged({
      node: node,
      main: node,
    });
  }, [meta, onNavChanged, path, query.tab]);

  return (
    <div>
      QUERY: <pre>{JSON.stringify(query)}</pre>
      <br />
      <ul>
        <li>
          <a href={path + '?x=1'}>111</a>
        </li>
        <li>
          <a href={path + '?x=AAA'}>AAA</a>
        </li>
        <li>
          <a href={path + '?x=1&y=2&y=3'}>ZZZ</a>
        </li>
      </ul>
      <pre>{JSON.stringify(meta.jsonData)}</pre>
    </div>
  );
});
