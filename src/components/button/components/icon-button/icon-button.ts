import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { BaseArtButton } from '../base-button';
import type { IArtIconButton } from './types';

@customElement('art-icon-button')
export class ArtIconButton extends BaseArtButton implements IArtIconButton {
  @property({ type: String }) icon = 'home';
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
    this.iconSizeClassMap = {
      '!text-[16px]': this.size === 'xs',
      '!text-[18px]': this.size === 'sm',
      '!text-[20px]': this.size === 'md',
      '!text-[22px]': this.size === 'lg',
      '!text-[24px]': this.size === 'xl',
      '!text-[26px]': this.size === '2xl',
      '!text-[28px]': this.size === '3xl',
    };

    // Init base button class maps
    this.setBaseClassMaps();
  }

  render() {
    return html`
      <button data-testid="art-icon-button" type="button" class="${classMap(this.buttonClassMap)}" ?disabled="${this.disabled}">
        <span data-testid="art-icon-button-icon" class="${classMap(this.iconSizeClassMap!)} material-symbols-rounded">${this.icon}</span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-icon-button': ArtIconButton;
  }
}
