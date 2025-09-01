import { css, html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseArtButton } from '../base-button';
import type { IArtFlatButton } from './types';

@customElement('art-flat-button')
export class ArtFlatButton extends BaseArtButton implements IArtFlatButton {
  @property({ type: String }) text = 'Click';
  buttonClassMap!: { [key: string]: boolean };

  static styles = [
    ...BaseArtButton.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  protected willUpdate(_changedProperties: PropertyValues): void {
    this.setBaseClasses();
    this.buttonClassMap = {
      ...this.layoutButtonClassMap,
      ...this.paddingClassMap,
      'bg-transparent': true,
      'font-semibold': true,
      'text-accent-primary': this.variant === 'primary',
      'hover:text-accent-primary-dark': this.variant === 'primary',
      'text-accent-secondary': this.variant === 'secondary',
      'hover:text-accent-secondary-dark': this.variant === 'secondary',
      'text-status-success': this.variant === 'success',
      'hover:text-status-success-dark': this.variant === 'success',
      'text-status-warning': this.variant === 'warning',
      'hover:text-status-warning-dark': this.variant === 'warning',
      'text-status-error': this.variant === 'error',
      'hover:text-status-error-dark': this.variant === 'error',
      'text-status-info': this.variant === 'info',
      'hover:text-status-info-dark': this.variant === 'info',
    };

    this.disabledClassMap = {
      'disabled:text-gray-300': true,
      'disabled:text-shadow-gray-300': true,
    };
  }

  render() {
    return html`
      <button
        type="button"
        class="${classMap({
          ...this.buttonClassMap,
          ...this.disabledClassMap,
        })}"
        ?disabled="${this.disabled}">
        <span class="${classMap(this.fontClassMap!)}">${this.text}</span>
      </button>
    `;
  }

  /* protected setVariantClasses(): void {
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
  } */
}

declare global {
  interface HTMLElementTagNameMap {
    'art-flat-button': ArtFlatButton;
  }
}
