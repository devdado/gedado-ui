import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseArtInput } from '../base-input';
import type { IArtTextInput } from './types';

@customElement('art-text-input')
export class ArtTextInput extends BaseArtInput implements IArtTextInput {
  @property({ type: String }) pattern?: string;
  @property({ type: Number }) minlength = 0;
  @property({ type: Number }) maxlength = 524288;

  static styles = [...BaseArtInput.styles];

  protected renderInput(): TemplateResult | null {
    return html`
      <input
        data-testid="art-text-input"
        type="text"
        id="${this.name}"
        class="art-control"
        name="${this.name}"
        .value="${this.internalValue}"
        placeholder="${ifDefined(this.placeholder)}"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        pattern="${ifDefined(this.pattern)}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-text-input': ArtTextInput;
  }
}
