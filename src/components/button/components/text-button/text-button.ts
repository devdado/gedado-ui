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
    this.initBaseButtonClassMap();
    this.setBaseClassMaps();
  }

  render() {
    return html`
      <button data-testid="art-text-button" type="button" class="${classMap(this.buttonClassMap)}" ?disabled="${this.disabled}">
        ${when(
          this.leftIcon,
          () => html`<span data-testid="art-text-button-left-icon" class="${classMap(this.iconSizeClassMap!)}">${this.leftIcon}</span>`
        )}
        <span data-testid="art-text-button-text" class="${classMap(this.fontSizeClassMap!)}">${this.text}</span>
        ${when(
          this.rightIcon,
          () => html`<span data-testid="art-text-button-right-icon" class="${classMap(this.iconSizeClassMap!)}">${this.rightIcon}</span>`
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
