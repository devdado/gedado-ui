import { css, html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseArtButton } from '../base-button';
import type { IArtIconButton } from './types';

@customElement('art-icon-button')
export class ArtIconButton extends BaseArtButton implements IArtIconButton {
  @property({ type: String }) icon: string = 'home';
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
      ...this.shadowClassMap,
      ...this.borderClassMap,
      ...this.variantClassMap,
      ...this.disabledClassMap,
    };

    this.fontClassMap = {
      '!text-[16px]': this.size === 'tiny',
      '!text-[18px]': this.size === 'small',
      '!text-[20px]': this.size === 'base',
      '!text-[22px]': this.size === 'large',
    };
  }

  render() {
    return html`
      <button type="button" class="${classMap(this.buttonClassMap)}" ?disabled="${this.disabled}">
        <span class="${classMap(this.fontClassMap!)} material-symbols-rounded">${this.icon}</span>
      </button>
    `;
  }

  /* protected setFontSizeClasses(): void {
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
  } */

  /* protected setPaddingClasses(): void {
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
  } */
}

declare global {
  interface HTMLElementTagNameMap {
    'art-icon-button': ArtIconButton;
  }
}
