import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { BaseArtButton } from '../base-button';
import type { IArtHollowButton } from './types';

@customElement('art-hollow-button')
export class ArtHollowButton extends BaseArtButton implements IArtHollowButton {
  @property({ type: String }) leftIcon?: string;
  @property({ type: String }) rightIcon?: string;
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
      ...this.borderClassMap,
      ...this.paddingClassMap,
      'bg-transparent': true,
      'border-accent-primary-light': this.variant === 'primary',
      'text-accent-primary-light': this.variant === 'primary',
      'hover:border-accent-primary-dark': this.variant === 'primary',
      'hover:text-accent-primary-dark': this.variant === 'primary',
      'border-accent-secondary-light': this.variant === 'secondary',
      'text-accent-secondary-light': this.variant === 'secondary',
      'hover:border-accent-secondary-dark': this.variant === 'secondary',
      'hover:text-accent-secondary-dark': this.variant === 'secondary',
      'border-status-success-light': this.variant === 'success',
      'text-status-success-light': this.variant === 'success',
      'hover:border-status-success-dark': this.variant === 'success',
      'hover:text-status-success-dark': this.variant === 'success',
      'border-status-warning-light': this.variant === 'warning',
      'text-status-warning-light': this.variant === 'warning',
      'hover:border-status-warning-dark': this.variant === 'warning',
      'hover:text-status-warning-dark': this.variant === 'warning',
      'border-status-error-light': this.variant === 'error',
      'text-status-error-light': this.variant === 'error',
      'hover:border-status-error-dark': this.variant === 'error',
      'hover:text-status-error-dark': this.variant === 'error',
      'border-status-info-light': this.variant === 'info',
      'text-status-info-light': this.variant === 'info',
      'hover:border-status-info-dark': this.variant === 'info',
      'hover:text-status-info-dark': this.variant === 'info',
    };
    this.borderClassMap = {
      border: true,
      'rounded-md': true,
      'border-accent-primary-dark': this.variant === 'primary',
      'border-accent-secondary-dark': this.variant === 'secondary',
      'border-status-success-dark': this.variant === 'success',
      'border-status-warning-dark': this.variant === 'warning',
      'border-status-error-dark': this.variant === 'error',
      'border-status-info-dark': this.variant === 'info',
    };
    this.disabledClassMap = {
      'disabled:border-gray-300': true,
      'disabled:text-gray-300': true,
      'disabled:shadow-gray-300': true,
    };
  }

  render() {
    return html`
      <button
        type="button"
        class="${classMap({
          ...this.buttonClassMap,
          ...this.disabledClassMap,
          ...this.borderClassMap,
        })}"
        ?disabled="${this.disabled}">
        ${when(this.leftIcon, () => html`<span class="${classMap(this.iconClassMap!)}">${this.leftIcon}</span>`)}
        <span class="${classMap(this.fontClassMap!)}">${this.text}</span>
        ${when(this.rightIcon, () => html`<span class="${classMap(this.iconClassMap!)}">${this.rightIcon}</span>`)}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-hollow-button': ArtHollowButton;
  }
}
