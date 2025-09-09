import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { BaseArtButton } from '../base-button';
import type { IArtTextButton } from './types';

@customElement('art-text-button')
export class ArtTextButton extends BaseArtButton implements IArtTextButton {
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
      ...this.shadowClassMap,
      ...this.borderClassMap,
      ...this.paddingClassMap,
      ...this.variantClassMap,
      ...this.disabledClassMap,
    };
  }

  render() {
    return html`
      <button type="button" class="${classMap(this.buttonClassMap)}" ?disabled="${this.disabled}">
        ${when(this.leftIcon, () => html`<span class="${classMap(this.iconClassMap!)}">${this.leftIcon}</span>`)}
        <span class="${classMap(this.fontClassMap!)}">${this.text}</span>
        ${when(this.rightIcon, () => html`<span class="${classMap(this.iconClassMap!)}">${this.rightIcon}</span>`)}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-text-button': ArtTextButton;
  }
}
