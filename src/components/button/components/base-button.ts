import { getSharedTailwindStyles } from '@/styles';
import type { Variant } from '@/types/core';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { ClassInfo } from 'lit/directives/class-map.js';
import type { ButtonSize, IBaseArtButton } from './types';

export abstract class BaseArtButton extends LitElement implements IBaseArtButton {
  // UI/UX
  @property({ type: String }) size: ButtonSize = 'base';
  @property({ type: String }) variant: Variant = 'primary';
  @property({ type: Boolean }) disabled = false;

  // Class Maps
  abstract buttonClassMap: ClassInfo;
  protected shadowClassMap?: ClassInfo;
  protected borderClassMap?: ClassInfo;
  protected paddingClassMap?: ClassInfo;
  protected fontClassMap?: ClassInfo;
  protected iconClassMap?: ClassInfo;
  protected variantClassMap?: ClassInfo;

  protected layoutButtonClassMap: ClassInfo = {
    flex: true,
    'cursor-pointer': true,
    'items-center': true,
    'justify-center': true,
    'gap-1': true,
  };

  protected disabledClassMap: ClassInfo = {
    'disabled:bg-gray-200': true,
    'disabled:text-gray-300': true,
    'disabled:cursor-not-allowed': true,
    'disabled:shadow-gray-300': true,
    'disabled:border-gray-300': true,
  };

  // Styling
  static styles = [
    // Get the shared Tailwind stylesheet.
    // In a browser, this returns a CSSStyleSheet object.
    // In Node.js (for build/SSR), it returns undefined.
    // The `|| css`` ` part provides an empty CSSResult as a fallback for Node.js,
    // ensuring the array always contains valid Lit style types.
    getSharedTailwindStyles() || css``,
  ];

  // Utils

  private setPaddingClassMap() {
    this.paddingClassMap = {
      'p-1': this.size === 'tiny',
      'p-1.5': this.size === 'small',
      'p-2': this.size === 'base',
      'p-2.5': this.size === 'large',
    };
  }

  private setShadowClassMap() {
    this.shadowClassMap = {
      'shadow-xs': true,
      'shadow-accent-primary-light': this.variant === 'primary',
      'shadow-accent-secondary-light': this.variant === 'secondary',
      'shadow-status-success-light': this.variant === 'success',
      'shadow-status-warning-light': this.variant === 'warning',
      'shadow-status-error-light': this.variant === 'error',
      'shadow-status-info-light': this.variant === 'info',
    };
  }

  private setBorderClassMap() {
    this.borderClassMap = {
      'rounded-md': true,
    };
  }

  private setFontClassMap() {
    this.fontClassMap = {
      'text-xs': this.size === 'tiny',
      'text-sm': this.size === 'small',
      'text-base': this.size === 'base',
      'text-lg': this.size === 'large',
      'leading-none': true,
    };
  }

  private setIconClassMap() {
    this.iconClassMap = {
      '!text-[12px]': this.size === 'tiny',
      '!text-[14px]': this.size === 'small',
      '!text-[16px]': this.size === 'base',
      '!text-[18px]': this.size === 'large',
      'material-symbols-rounded': true,
    };
  }

  private setVariantClassMap() {
    this.variantClassMap = {
      'bg-accent-primary-light': this.variant === 'primary',
      'text-accent-primary-darkest': this.variant === 'primary',
      'hover:bg-accent-primary-lightest': this.variant === 'primary',
      'bg-accent-secondary-light': this.variant === 'secondary',
      'text-accent-secondary-darkest': this.variant === 'secondary',
      'hover:bg-accent-secondary-lightest': this.variant === 'secondary',
      'bg-status-success-light': this.variant === 'success',
      'text-status-success-darkest': this.variant === 'success',
      'hover:bg-status-success-lightest': this.variant === 'success',
      'bg-status-warning-light': this.variant === 'warning',
      'text-status-warning-darkest': this.variant === 'warning',
      'hover:bg-status-warning-lightest': this.variant === 'warning',
      'bg-status-error-light': this.variant === 'error',
      'text-status-error-darkest': this.variant === 'error',
      'hover:bg-status-error-lightest': this.variant === 'error',
      'bg-status-info-light': this.variant === 'info',
      'text-status-info-darkest': this.variant === 'info',
      'hover:bg-status-info-lightest': this.variant === 'info',
    };
  }

  protected setBaseClasses() {
    this.setPaddingClassMap();
    this.setShadowClassMap();
    this.setBorderClassMap();
    this.setFontClassMap();
    this.setIconClassMap();
    this.setVariantClassMap();
  }
}
