/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  EventEmitter,
} from '@stencil/core';
import {
  SuperTabsConfig,
} from './super-tabs.model';


export namespace Components {

  interface SuperTabButton {
    'active': boolean;
    'disabled': boolean;
    'index': number;
    'setParent': (parent: any) => void;
  }
  interface SuperTabButtonAttributes extends StencilHTMLAttributes {
    'active': boolean;
    'disabled': boolean;
    'index': number;
    'onStBlur'?: (event: CustomEvent<HTMLSuperTabButtonElement>) => void;
    'onStClick'?: (event: CustomEvent<HTMLSuperTabButtonElement>) => void;
    'onStFocus'?: (event: CustomEvent<HTMLSuperTabButtonElement>) => void;
  }

  interface SuperTabIndicator {
    'activeTabIndex': number;
    'isDragging': boolean;
    'selectedTabIndex': number;
    'toolbarPosition': 'top' | 'bottom';
  }
  interface SuperTabIndicatorAttributes extends StencilHTMLAttributes {
    'activeTabIndex'?: number;
    'isDragging'?: boolean;
    'selectedTabIndex'?: number;
    'toolbarPosition'?: 'top' | 'bottom';
  }

  interface SuperTab {
    'index': number;
  }
  interface SuperTabAttributes extends StencilHTMLAttributes {
    'index'?: number;
    /**
    * Emitted when the button loses focus.
    */
    'onIonBlur'?: (event: CustomEvent<void>) => void;
  }

  interface SuperTabsContainer {
    'activeTabIndex': number;
    'config': SuperTabsConfig;
    'index': number;
    'selectedTabIndex': number;
    'swipeEnabled': boolean;
  }
  interface SuperTabsContainerAttributes extends StencilHTMLAttributes {
    'activeTabIndex'?: number;
    'config'?: SuperTabsConfig;
    'index'?: number;
    'onActiveTabChange'?: (event: CustomEvent<HTMLSuperTabElement[]>) => void;
    'onActiveTabIndexChange'?: (event: CustomEvent<number>) => void;
    'onSelectedTabIndexChange'?: (event: CustomEvent<number>) => void;
    'onStTabsChange'?: (event: CustomEvent<HTMLSuperTabElement[]>) => void;
    'selectedTabIndex'?: number;
    'swipeEnabled'?: boolean;
  }

  interface SuperTabsToolbar {
    'config': SuperTabsConfig;
    'onButtonClick': (button: any) => void;
    'setActiveTab': (index: number) => void;
    'setSelectedTab': (index: number) => void;
    'showIndicator': boolean;
    'toolbarPosition': 'top' | 'bottom';
  }
  interface SuperTabsToolbarAttributes extends StencilHTMLAttributes {
    'config'?: SuperTabsConfig;
    'onButtonClick'?: (event: CustomEvent<HTMLSuperTabButtonElement>) => void;
    'showIndicator'?: boolean;
    'toolbarPosition'?: 'top' | 'bottom';
  }

  interface SuperTabs {
    'activeTabIndex': number;
    'config': SuperTabsConfig;
    'hasToolbar': boolean;
    'index': number;
  }
  interface SuperTabsAttributes extends StencilHTMLAttributes {
    'activeTabIndex'?: number;
    'config'?: SuperTabsConfig;
    'hasToolbar'?: boolean;
    'index'?: number;
    /**
    * Emitted when the button loses focus.
    */
    'onIonBlur'?: (event: CustomEvent<void>) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SuperTabButton': Components.SuperTabButton;
    'SuperTabIndicator': Components.SuperTabIndicator;
    'SuperTab': Components.SuperTab;
    'SuperTabsContainer': Components.SuperTabsContainer;
    'SuperTabsToolbar': Components.SuperTabsToolbar;
    'SuperTabs': Components.SuperTabs;
  }

  interface StencilIntrinsicElements {
    'super-tab-button': Components.SuperTabButtonAttributes;
    'super-tab-indicator': Components.SuperTabIndicatorAttributes;
    'super-tab': Components.SuperTabAttributes;
    'super-tabs-container': Components.SuperTabsContainerAttributes;
    'super-tabs-toolbar': Components.SuperTabsToolbarAttributes;
    'super-tabs': Components.SuperTabsAttributes;
  }


  interface HTMLSuperTabButtonElement extends Components.SuperTabButton, HTMLStencilElement {}
  var HTMLSuperTabButtonElement: {
    prototype: HTMLSuperTabButtonElement;
    new (): HTMLSuperTabButtonElement;
  };

  interface HTMLSuperTabIndicatorElement extends Components.SuperTabIndicator, HTMLStencilElement {}
  var HTMLSuperTabIndicatorElement: {
    prototype: HTMLSuperTabIndicatorElement;
    new (): HTMLSuperTabIndicatorElement;
  };

  interface HTMLSuperTabElement extends Components.SuperTab, HTMLStencilElement {}
  var HTMLSuperTabElement: {
    prototype: HTMLSuperTabElement;
    new (): HTMLSuperTabElement;
  };

  interface HTMLSuperTabsContainerElement extends Components.SuperTabsContainer, HTMLStencilElement {}
  var HTMLSuperTabsContainerElement: {
    prototype: HTMLSuperTabsContainerElement;
    new (): HTMLSuperTabsContainerElement;
  };

  interface HTMLSuperTabsToolbarElement extends Components.SuperTabsToolbar, HTMLStencilElement {}
  var HTMLSuperTabsToolbarElement: {
    prototype: HTMLSuperTabsToolbarElement;
    new (): HTMLSuperTabsToolbarElement;
  };

  interface HTMLSuperTabsElement extends Components.SuperTabs, HTMLStencilElement {}
  var HTMLSuperTabsElement: {
    prototype: HTMLSuperTabsElement;
    new (): HTMLSuperTabsElement;
  };

  interface HTMLElementTagNameMap {
    'super-tab-button': HTMLSuperTabButtonElement
    'super-tab-indicator': HTMLSuperTabIndicatorElement
    'super-tab': HTMLSuperTabElement
    'super-tabs-container': HTMLSuperTabsContainerElement
    'super-tabs-toolbar': HTMLSuperTabsToolbarElement
    'super-tabs': HTMLSuperTabsElement
  }

  interface ElementTagNameMap {
    'super-tab-button': HTMLSuperTabButtonElement;
    'super-tab-indicator': HTMLSuperTabIndicatorElement;
    'super-tab': HTMLSuperTabElement;
    'super-tabs-container': HTMLSuperTabsContainerElement;
    'super-tabs-toolbar': HTMLSuperTabsToolbarElement;
    'super-tabs': HTMLSuperTabsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
