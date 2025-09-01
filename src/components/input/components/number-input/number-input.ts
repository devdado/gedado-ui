import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseArtInput } from '../base-input';
import type { IArtNumberInput } from './types';

@customElement('art-number-input')
export class ArtNumberInput extends BaseArtInput implements IArtNumberInput {
  @property({ type: Number }) min?: number;
  @property({ type: Number }) max?: number;
  @property({ type: Number }) step = 1;

  static styles = [...BaseArtInput.styles];

  protected renderInput(): TemplateResult | null {
    return html`
      <input
        data-testid="art-number-input"
        type="number"
        id="${this.name}"
        class="art-control"
        name="${this.name}"
        .value="${this.internalValue}"
        placeholder="${ifDefined(this.placeholder)}"
        min="${ifDefined(this.min)}"
        max="${ifDefined(this.max)}"
        step="${this.step}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-number-email': ArtNumberInput;
  }
}
