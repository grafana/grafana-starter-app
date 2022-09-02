import { AppRootProps, NavModelItem } from '@grafana/data';
import { useEffect } from 'react';
import { PLUGIN_URL_PATH } from 'types';
import { APP_TITLE, APP_SUBTITLE } from './consts';
import { useLocation } from 'react-router-dom';

export function useNavModel({ meta, onNavChanged }: AppRootProps) {
  const location = useLocation();

  useEffect(() => {
    const tabs: NavModelItem[] = [
      {
        text: 'Catalog',
        url: `${PLUGIN_URL_PATH}/catalog`,
        icon: 'file-alt',
      },
      {
        text: 'Canvas',
        url: `${PLUGIN_URL_PATH}/canvas`,
        icon: 'file-alt',
      },
    ];

    for (const tab of tabs) {
      if (tab.url === location.pathname) {
        tab.active = true;
      }
    }

    // Fallback if current `tab` doesn't match any page
    if (!tabs.some(({ active }) => active)) {
      tabs[0].active = true;
    }

    const node = {
      text: APP_TITLE,
      img: meta.info.logos.large,
      subTitle: APP_SUBTITLE,
      url: 'a/myorgid-simple-app?tab=a',
      children: tabs,
    };

    const navModel = {
      node,
      main: node,
    };

    onNavChanged(navModel);
  }, [meta.info.logos.large, location, onNavChanged]);
}
