import { AppRootProps } from '@grafana/data';
import { A } from './A';
import { B } from './B';
import { C } from './C';

export type PageDefinition = {
  component: React.FC<AppRootProps>;
  icon: string;
  id: string;
  text: string;
};

export const pages: PageDefinition[] = [
  {
    component: A,
    icon: 'file-alt',
    id: 'a',
    text: 'Tab A',
  },
  {
    component: B,
    icon: 'file-alt',
    id: 'b',
    text: 'Tab B',
  },
  {
    component: C,
    icon: 'file-alt',
    id: 'c',
    text: 'Tab C',
  },
];
