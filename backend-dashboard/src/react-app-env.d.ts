/// <reference types="react-scripts" />

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'braft-extensions/dist/table' {
  const clss: () => any;
  export default clss;
}

declare module 'react-medium-editor' {
  import { CoreOptions, MediumEditor } from 'medium-editor';
  export default class Editor<Item extends any> extends React.Component<{
    text?: string;
    options?: CoreOptions;
    style?: React.CSSProperties;
    className?: string;
    onChange: (text: string, medium: MediumEditor) => void;
  }> {}
}

declare module 'react-nestable' {
  import * as React from 'react';

  export type Item = {
    id: string;
    text: string;
    children?: Item[];
    nestedIn?: string | null;
    link?: string | null;
    type?: number;
  };
  export default class Nestable<Item extends any> extends React.Component<{
    items: any;
    handler?: React.ReactNode;
    renderItem: (arg: {
      item: Item;
      collapseIcon: React.ReactNode;
      index: number;
      handler: React.ReactNode;
    }) => React.ReactNode;
    maxDepth: number;
    renderCollapseIcon?: (args: { isCollapsed: boolean }) => React.ReactNode;
    onChange: (items: Item[]) => void;
    confirmChange?: (dragItem: Item, destinationParent: Item) => boolean;
    collapsed?: boolean;
  }> {}
}

declare module 'react-split' {
  import * as React from 'react';
  export default class ReactSplit<Item extends any> extends React.Component<any> {}
}

declare module 'braft-utils' {
  import * as React from 'react';
  export const ContentUtils = {
    insertMedias: any,
  };
}
