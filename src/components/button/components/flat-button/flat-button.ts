import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { BaseArtButton } from '../base-button';
import type { IArtFlatButton } from './types';

@customElement('art-flat-button')
export class ArtFlatButton extends BaseArtButton implements IArtFlatButton {
  @property({ type: String }) text = 'Click';
  buttonClassMap!: ClassInfo;

  static styles = [
    ...BaseArtButton.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  protected willUpdate(): void {
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
}

declare global {
  interface HTMLElementTagNameMap {
    'art-flat-button': ArtFlatButton;
  }
}
