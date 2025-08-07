import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { IFlatButton } from '../../types';
import { BaseButton } from '../base-button.abstract';

@customElement('art-flat-button')
export class ArtFlatButton extends BaseButton implements IFlatButton {
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
    return html`
      <button
        type="button"
        class="${this.fixedClasses} ${this.paddingClasses} ${this
          .variantClasses} bg-transparent disabled:text-gray-300"
        ?disabled="${this.disabled}">
        <span class="${this.fontSizeClasses} leading-none">${this.text}</span>
      </button>
    `;
  }

  protected setVariantClasses(): void {
    switch (this.variant) {
      case 'primary':
        this.variantClasses = `
          text-accent-primary 
          hover:text-accent-primary-dark  
        `;
        break;
      case 'secondary':
        this.variantClasses = ` 
          text-accent-secondary 
          hover:text-accent-secondary-dark 
        `;
        break;
      case 'success':
        this.variantClasses = `
          text-status-success 
          hover:text-status-success-dark
        `;
        break;
      case 'warning':
        this.variantClasses = `
          text-status-warning 
          hover:text-status-warning-dark 
        `;
        break;
      case 'error':
        this.variantClasses = `
          text-status-error 
          hover:text-status-error-dark 
        `;
        break;
      case 'info':
        this.variantClasses = ` 
          text-status-info 
          hover:text-status-info-dark 
        `;
        break;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-flat-button': ArtFlatButton;
  }
}
