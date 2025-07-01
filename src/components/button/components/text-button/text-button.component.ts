import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { ITextButton } from '../../types';
import { BaseButton } from '../base-button.abstract';

@customElement('art-text-button')
export class ArtTextButton extends BaseButton implements ITextButton {
  @property({ type: String }) leftIcon?: string;
  @property({ type: String }) rightIcon?: string;

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
        class="${this.fixedClasses} ${this.paddingClasses} ${this.variantClasses} ${this
          .borderClasses} shadow-lg disabled:bg-gray-200 disabled:text-gray-300"
        ?disabled="${this.disabled}"
      >
        ${when(
          this.leftIcon,
          () => html`<span class="${this.iconSizeClasses} material-symbols-rounded">home</span>`,
        )}
        <span class="${this.fontSizeClasses} leading-none">${this.text}</span>
        ${when(
          this.rightIcon,
          () => html`<span class="${this.iconSizeClasses} material-symbols-rounded">home</span>`,
        )}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-text-button': ArtTextButton;
  }
}
