import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseArtInput } from '../base-input';
import type { IArtSearchInput } from './types';

@customElement('art-search-input')
export class ArtSearchInput extends BaseArtInput implements IArtSearchInput {
  @property({ type: String }) pattern?: string;
  @property({ type: Number }) minlength = 0;
  @property({ type: Number }) maxlength = 524288;

  static styles = [...BaseArtInput.styles];

  protected renderInput(): TemplateResult | null {
    return html`
      <input
        data-testid="art-search-input"
        type="search"
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
    'art-search-input': ArtSearchInput;
  }
}
