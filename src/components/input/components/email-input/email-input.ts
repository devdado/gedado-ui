import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseArtInput } from '../base-input';
import type { IArtEmailInput } from './types';

@customElement('art-email-input')
export class ArtEmailInput extends BaseArtInput implements IArtEmailInput {
  @property({ type: Number }) minlength = 0;
  @property({ type: Number }) maxlength = 524288;
  @property({ type: Boolean }) multiple = false;

  static styles = [...BaseArtInput.styles];

  protected renderInput(): TemplateResult | null {
    return html`
      <input
        data-testid="art-email-input"
        type="email"
        id="${this.name}"
        class="art-control"
        name="${this.name}"
        .value="${this.internalValue}"
        placeholder="${ifDefined(this.placeholder)}"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?multiple="${this.multiple}"
        @input="${this.onInput}" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-email-input': ArtEmailInput;
  }
}
