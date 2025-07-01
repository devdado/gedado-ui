import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { IIconButton } from '../../types';
import { BaseButton } from '../base-button.abstract';

@customElement('art-icon-button')
export class ArtIconButton extends BaseButton implements IIconButton {
  @property({ type: String }) icon: string = 'home';

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
    this.setIconSizeClasses();
    this.setPaddingClasses();
    return html`
      <button
        type="button"
        class="${this.fixedClasses} ${this.paddingClasses} ${this.variantClasses} ${this
          .borderClasses} disabled:bg-gray-200 disabled:text-gray-300"
        ?disabled="${this.disabled}"
      >
        <span class="${this.iconSizeClasses} material-symbols-rounded">${this.icon}</span>
      </button>
    `;
  }

  setIconSizeClasses(): void {
    switch (this.size) {
      case 'tiny':
        this.iconSizeClasses = '!text-[16px]';
        break;
      case 'small':
        this.iconSizeClasses = '!text-[18px]';
        break;
      case 'base':
        this.iconSizeClasses = '!text-[20px]';
        break;
      case 'large':
        this.iconSizeClasses = '!text-[22px]';
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
    'art-icon-button': ArtIconButton;
  }
}
