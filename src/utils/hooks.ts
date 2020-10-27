import { AppRootProps, NavModelItem } from '@grafana/data';
import { PageDefinition } from 'pages';
import { useMemo } from 'react';
import { APP_TITLE, APP_SUBTITLE } from './consts';

type Args = {
  meta: AppRootProps['meta'];
  pages: PageDefinition[];
  path: string;
  tab: string;
};

export function useNavModel({ meta, pages, path, tab }: Args) {
  return useMemo(() => {
    const tabs: NavModelItem[] = [];

    pages.forEach(({ text, icon, id }) => {
      tabs.push({
        text,
        icon,
        id,
        url: `${path}?tab=${id}`,
      });

      if (tab === id) {
        tabs[tabs.length - 1].active = true;
      }
    });

    // Fallback if current `tab` doesn't match any page
    if (!tabs.some(({ active }) => active)) {
      tabs[0].active = true;
    }

    const node = {
      text: APP_TITLE,
      img: meta.info.logos.large,
      subTitle: APP_SUBTITLE,
      url: path,
      children: tabs,
    };

    return {
      node,
      main: node,
    };
  }, [meta.info.logos.large, pages, path, tab]);
}
