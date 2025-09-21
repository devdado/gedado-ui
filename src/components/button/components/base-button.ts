import { getSharedTailwindStyles } from '@/styles';
import type { ArtSize, ArtVariant } from '@/types/core';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { ClassInfo } from 'lit/directives/class-map.js';
import type { IBaseArtButton } from './types';

export abstract class BaseArtButton extends LitElement implements IBaseArtButton {
  // UI/UX
  @property({ type: String }) size: ArtSize = 'md';
  @property({ type: String }) variant: ArtVariant = 'primary';
  @property({ type: Boolean }) disabled = false;

  // Class Maps
  protected borderClassMap?: ClassInfo;
  protected buttonClassMap?: ClassInfo;
  protected fontSizeClassMap?: ClassInfo;
  protected iconSizeClassMap?: ClassInfo;
  protected paddingClassMap?: ClassInfo;
  protected shadowClassMap?: ClassInfo;
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
      'p-1': this.size === 'xs',
      'p-1.5': this.size === 'sm',
      'p-2': this.size === 'md',
      'p-2.5': this.size === 'lg',
      'p-3': this.size === 'xl',
      'p-3.5': this.size === '2xl',
      'p-4': this.size === '3xl',
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
      'shadow-status-neutral-light': this.variant === 'neutral',
    };
  }

  private setBorderClassMap() {
    this.borderClassMap = {
      'rounded-md': true,
    };
  }

  private setFontSizeClassMap() {
    this.fontSizeClassMap = {
      'text-xs': this.size === 'xs',
      'text-sm': this.size === 'sm',
      'text-base': this.size === 'md',
      'text-lg': this.size === 'lg',
      'text-xl': this.size === 'xl',
      'text-2xl': this.size === '2xl',
      'text-3xl': this.size === '3xl',
      'leading-none': true,
    };
  }

  private setIconSizeClassMap() {
    this.iconSizeClassMap = {
      '!text-[12px]': this.size === 'xs',
      '!text-[14px]': this.size === 'sm',
      '!text-[16px]': this.size === 'md',
      '!text-[18px]': this.size === 'lg',
      '!text-[20px]': this.size === 'xl',
      '!text-[22px]': this.size === '2xl',
      '!text-[24px]': this.size === '3xl',
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
      'bg-status-neutral-light': this.variant === 'neutral',
      'text-status-neutral-darkest': this.variant === 'neutral',
      'hover:bg-status-neutral-lightest': this.variant === 'neutral',
    };
  }

  protected initBaseButtonClassMap() {
    this.setPaddingClassMap();
    this.setShadowClassMap();
    this.setBorderClassMap();
    this.setFontSizeClassMap();
    this.setIconSizeClassMap();
    this.setVariantClassMap();
  }

  protected setBaseClassMaps() {
    this.buttonClassMap = {
      ...this.layoutButtonClassMap,
      ...this.disabledClassMap,
      ...this.paddingClassMap,
      ...this.shadowClassMap,
      ...this.borderClassMap,
      ...this.variantClassMap,
    };
  }
}
