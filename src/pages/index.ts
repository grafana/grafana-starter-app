import { AppRootProps } from '@grafana/data';
import { A } from './A';
import { B } from './B';
import { C } from './C';

type PageDefinition = {
  component: React.FC<AppRootProps>;
  icon: string;
  id: string;
  text: string;
};

export const pages: PageDefinition[] = [
  {
    component: A,
    icon: 'fa fa-fw fa-file-text-o',
    id: 'a',
    text: 'Tab A',
  },
  {
    component: B,
    icon: 'fa fa-fw fa-file-text-o',
    id: 'b',
    text: 'Tab B',
  },
  {
    component: C,
    icon: 'fa fa-fw fa-file-text-o',
    id: 'c',
    text: 'Tab C',
  },
];
