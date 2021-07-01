import { AppRootProps, NavModelItem } from '@grafana/data';
import { ExampleAppSettings } from 'types';
import { PageAAA } from './A';
import { PageBBB } from './B';
import { APP_TITLE, APP_SUBTITLE } from './consts';

export type PageDefinition = {
  component: React.FC<AppRootProps<ExampleAppSettings>>;
  icon: string;
  sub: string;
  text: string;
};

export const pages: PageDefinition[] = [
  {
    component: PageAAA,
    icon: 'file-alt',
    sub: '', // the default
    text: 'Page A',
  },
  {
    component: PageBBB,
    icon: 'file-alt',
    sub: 'bbb',
    text: 'Page B',
  },
];

export function getPageNav(props: AppRootProps, key: string) {
  const tabs: NavModelItem[] = [];
  let { basename, meta } = props;
  if (!basename.endsWith('/')) {
    basename += '/';
  }

  pages.forEach(({ text, icon, sub }) => {
    tabs.push({
      text,
      icon,
      id: sub,
      url: `${basename}${sub}`,
    });

    if (sub === key) {
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
    url: `${basename}${key}`,
    children: tabs,
  };

  return {
    node,
    main: node,
  };
}
