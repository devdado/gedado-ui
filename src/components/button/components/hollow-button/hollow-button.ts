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
    this.initBaseButtonClassMap();

    // Override defaults
    this.variantClassMap = {
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
      'border-status-neutral-light': this.variant === 'neutral',
      'text-status-neutral-light': this.variant === 'neutral',
      'hover:border-status-neutral-dark': this.variant === 'neutral',
      'hover:text-status-neutral-dark': this.variant === 'neutral',
    };

    this.disabledClassMap = {
      'disabled:border-gray-300': true,
      'disabled:text-gray-300': true,
      'disabled:shadow-gray-300': true,
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
      'border-status-neutral-dark': this.variant === 'neutral',
    };

    this.shadowClassMap = {
      'shadow-none': true,
    };

    // Set button class maps
    this.setBaseClassMaps();

    // Add extra classes
    this.buttonClassMap = {
      ...this.buttonClassMap,
      'bg-transparent': true,
    };
  }

  render() {
    return html`
      <button data-testid="art-hollow-button" type="button" class="${classMap(this.buttonClassMap)}" ?disabled="${this.disabled}">
        ${when(
          this.leftIcon,
          () => html`<span data-testid="art-hollow-button-left-icon" class="${classMap(this.iconSizeClassMap!)}">${this.leftIcon}</span>`
        )}
        <span data-testid="art-hollow-button-text" class="${classMap(this.fontSizeClassMap!)}">${this.text}</span>
        ${when(
          this.rightIcon,
          () => html`<span data-testid="art-hollow-button-right-icon" class="${classMap(this.iconSizeClassMap!)}">${this.rightIcon}</span>`
        )}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-hollow-button': ArtHollowButton;
  }
}
