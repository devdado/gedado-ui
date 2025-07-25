import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { IHollowButton } from '../../types';
import { BaseButton } from '../base-button.abstract';

@customElement('art-hollow-button')
export class ArtHollowButton extends BaseButton implements IHollowButton {
  @property({ type: String }) text: string = 'Click me';

  static styles = [
    ...BaseButton.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    this.initBaseButton();
    this.setPaddingClasses();
    this.setVariantClasses();
    return html`
      <button
        type="button"
        class="${this.fixedClasses} ${this.paddingClasses} ${this.variantClasses} ${this
          .borderClasses} border bg-transparent disabled:border-gray-300 disabled:text-gray-300"
        ?disabled="${this.disabled}">
        <span class="${this.fontSizeClasses} leading-none">${this.text}</span>
      </button>
    `;
  }

  setVariantClasses(): void {
    switch (this.variant) {
      case 'primary':
        this.variantClasses = `
          border-accent-primary-light 
          text-accent-primary-light 
          hover:border-accent-primary-dark
          hover:text-accent-primary-dark  
        `;
        break;
      case 'secondary':
        this.variantClasses = `
          border-accent-secondary-light 
          text-accent-secondary-light 
          hover:border-accent-secondary-dark 
          hover:text-accent-secondary-dark 
        `;
        break;
      case 'success':
        this.variantClasses = `
          border-status-success-light 
          text-status-success-light 
          hover:border-status-success-dark
          hover:text-status-success-dark
        `;
        break;
      case 'warning':
        this.variantClasses = `
          border-status-warning-light 
          text-status-warning-light 
          hover:border-status-warning-dark 
          hover:text-status-warning-dark 
        `;
        break;
      case 'error':
        this.variantClasses = `
          border-status-error-light 
          text-status-error-light 
          hover:border-status-error-dark 
          hover:text-status-error-dark 
        `;
        break;
      case 'info':
        this.variantClasses = `
          border-status-info-light 
          text-status-info-light 
          hover:border-status-info-dark 
          hover:text-status-info-dark 
        `;
        break;
    }
  }

  setPaddingClasses(): void {
    switch (this.size) {
      case 'tiny':
        this.paddingClasses = 'p-1';
        break;
      case 'small':
        this.paddingClasses = 'p-1.5';
        break;
      case 'base':
        this.paddingClasses = 'p-2';
        break;
      case 'large':
        this.paddingClasses = 'p-2.5';
        break;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-hollow-button': ArtHollowButton;
  }
}
