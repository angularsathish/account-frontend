import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'default',
    title: 'Dashboard',
    type: 'item',
    url: '/dashboard/default',
    classes: 'nav-item',
    icon: 'feather icon-home',
  },

  {
    id: 'customers',
    title: 'Customers',
    type: 'item',
    url: '/project-crm/pc-customers',
    classes: 'nav-item',
    icon: 'feather icon-users',
  },
  {
    id: 'supplier',
    title: 'Supplier',
    type: 'item',
    url: '/project-crm/pc-project',
    classes: 'nav-item',
    icon: 'feather icon-user-check',
  },

  {
    id: 'file-upload',
    title: 'File Upload',
    type: 'item',
    url: '/file-upload',
    classes: 'nav-item',
    icon: 'feather icon-upload-cloud',
  },

  {
    id: 'disabled-menu',
    title: 'Disabled Menu',
    type: 'item',
    url: 'javascript:',
    classes: 'nav-item disabled',
    icon: 'feather icon-power',
    external: true,
  },
  {
    id: 'sample-page',
    title: 'Sample Page',
    type: 'item',
    url: '/sample-page',
    classes: 'nav-item',
    icon: 'feather icon-sidebar',
  },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
