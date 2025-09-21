import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { BaseInput } from '../base-input.abstract';

@customElement('art-number-input')
export class ArtNumberInput extends BaseInput {
  // UI/UX
  @property({ type: String }) placeholder?: string;

  // Validation
  @property({ type: Number }) min?: number;
  @property({ type: Number }) max?: number;
  @property({ type: Number }) step?: number;

  static styles = [...BaseInput.styles];

  // Abstract

  renderControl() {
    return html`
      <input
        type="number"
        id="${this.name}"
        name="${this.name}"
        title="${ifDefined(this.title)}"
        placeholder="${ifDefined(this.placeholder)}"
        class="${classMap(this.inputClasses)}"
        .value="${live(this.value)}"
        min="${ifDefined(this.min)}"
        max="${ifDefined(this.max)}"
        step="${ifDefined(this.step)}"
        inputmode="decimal"
        ?readonly=${this.readOnly}
        ?required=${this.required}
        ?disabled=${this.disabled}
        @input="${this.handleInput}"
        @change="${this.handleChange}" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-number-input': ArtNumberInput;
  }
}
