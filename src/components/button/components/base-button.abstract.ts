import type { Variant } from '@/shared/models';
import { getSharedTailwindStyles } from '@/shared/styles';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { ButtonSize, IBaseButton } from '../types';

export abstract class BaseButton extends LitElement implements IBaseButton {
  @property({ type: String }) text = 'Click';
  @property({ type: String }) size: ButtonSize = 'base';
  @property({ type: String }) variant: Variant = 'primary';
  @property({ type: Boolean }) disabled = false;
  fixedClasses =
    'flex cursor-pointer items-center justify-center gap-1 disabled:cursor-not-allowed';
  borderClasses = 'rounded-md';
  fontSizeClasses?: string;
  iconSizeClasses?: string;
  paddingClasses?: string;
  variantClasses?: string;

  static styles = [
    // Get the shared Tailwind stylesheet.
    // In a browser, this returns a CSSStyleSheet object.
    // In Node.js (for build/SSR), it returns undefined.
    // The `|| css`` ` part provides an empty CSSResult as a fallback for Node.js,
    // ensuring the array always contains valid Lit style types.
    getSharedTailwindStyles() || css``,
  ];

  protected initBaseButton() {
    this.setFontSizeClasses();
    this.setIconSizeClasses();
    this.setPaddingClasses();
    this.setVariantClasses();
  }

  protected setIconSizeClasses(): void {
    switch (this.size) {
      case 'tiny':
        this.iconSizeClasses = '!text-[12px]';
        break;
      case 'small':
        this.iconSizeClasses = '!text-[14px]';
        break;
      case 'base':
        this.iconSizeClasses = '!text-[16px]';
        break;
      case 'large':
        this.iconSizeClasses = '!text-[18px]';
        break;
    }
  }

  protected setPaddingClasses(): void {
    switch (this.size) {
      case 'tiny':
        this.paddingClasses = 'px-2.5 py-1.5';
        break;
      case 'small':
        this.paddingClasses = 'px-3 py-2';
        break;
      case 'base':
        this.paddingClasses = 'px-3.5 py-2.5';
        break;
      case 'large':
        this.paddingClasses = 'px-4 py-3';
        break;
    }
  }

  protected setFontSizeClasses(): void {
    switch (this.size) {
      case 'tiny':
        this.fontSizeClasses = 'text-xs';
        break;
      case 'small':
        this.fontSizeClasses = 'text-sm';
        break;
      case 'base':
        this.fontSizeClasses = 'text-base';
        break;
      case 'large':
        this.fontSizeClasses = 'text-lg';
        break;
    }
  }

  protected setVariantClasses(): void {
    switch (this.variant) {
      case 'primary':
        this.variantClasses = `
          bg-accent-primary-light 
          text-accent-primary-darkest 
          hover:bg-accent-primary-lightest  
        `;
        break;
      case 'secondary':
        this.variantClasses = `
          bg-accent-secondary-light 
          text-accent-secondary-darkest 
          hover:bg-accent-secondary-lightest 
        `;
        break;
      case 'success':
        this.variantClasses = `
          bg-status-success-light 
          text-status-success-darkest 
          hover:bg-status-success-lightest
        `;
        break;
      case 'warning':
        this.variantClasses = `
          bg-status-warning-light 
          text-status-warning-darkest 
          hover:bg-status-warning-lightest 
        `;
        break;
      case 'error':
        this.variantClasses = `
          bg-status-error-light 
          text-status-error-darkest 
          hover:bg-status-error-lightest 
        `;
        break;
      case 'info':
        this.variantClasses = `
          bg-status-info-light 
          text-status-info-darkest 
          hover:bg-status-info-lightest 
        `;
        break;
    }
  }
}
