/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import {
  MatchResults,
} from '@stencil/router';

declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppApps as AppApps
} from './components/app-apps/app-apps';

declare global {
  interface HTMLAppAppsElement extends AppApps, HTMLStencilElement {
  }
  var HTMLAppAppsElement: {
    prototype: HTMLAppAppsElement;
    new (): HTMLAppAppsElement;
  };
  interface HTMLElementTagNameMap {
    "app-apps": HTMLAppAppsElement;
  }
  interface ElementTagNameMap {
    "app-apps": HTMLAppAppsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-apps": JSXElements.AppAppsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAppsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppCard as AppCard
} from './components/app-card/app-card';

declare global {
  interface HTMLAppCardElement extends AppCard, HTMLStencilElement {
  }
  var HTMLAppCardElement: {
    prototype: HTMLAppCardElement;
    new (): HTMLAppCardElement;
  };
  interface HTMLElementTagNameMap {
    "app-card": HTMLAppCardElement;
  }
  interface ElementTagNameMap {
    "app-card": HTMLAppCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-card": JSXElements.AppCardAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCardAttributes extends HTMLAttributes {
      app?: {
    icon: string,
    title: string,
    description: string
  };
    }
  }
}


import {
  AppHome as AppHome
} from './components/app-home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppProfile as AppProfile
} from './components/app-profile/app-profile';

declare global {
  interface HTMLAppProfileElement extends AppProfile, HTMLStencilElement {
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-profile": JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  LazyImg as LazyImg
} from './components/lazy-img/lazy-img';

declare global {
  interface HTMLLazyImgElement extends LazyImg, HTMLStencilElement {
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-img": JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}


import {
  MadnessFooter as MadnessFooter
} from './components/madness-footer/madness-footer';

declare global {
  interface HTMLMadnessFooterElement extends MadnessFooter, HTMLStencilElement {
  }
  var HTMLMadnessFooterElement: {
    prototype: HTMLMadnessFooterElement;
    new (): HTMLMadnessFooterElement;
  };
  interface HTMLElementTagNameMap {
    "madness-footer": HTMLMadnessFooterElement;
  }
  interface ElementTagNameMap {
    "madness-footer": HTMLMadnessFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "madness-footer": JSXElements.MadnessFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface MadnessFooterAttributes extends HTMLAttributes {
      networks?: {
    link: string,
    icon: string
  }[];
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
