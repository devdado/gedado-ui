import { BaseControl } from '@/shared/base';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

@customElement('art-email-input')
export class ArtEmailInput extends BaseControl {
  // UI/UX
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean }) multiple = false;
  @property({ type: Object }) datalist?: { name: string; options: string[] }; // Require "multiple"

  // Validation
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;

  static styles = [
    ...BaseControl.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  // Abstract

  protected renderControl() {
    return html`
      <input
        control
        type="email"
        id="${this.name}"
        name="${this.name}"
        title="${ifDefined(this.title)}"
        placeholder="${ifDefined(this.placeholder)}"
        class="${classMap({ ...this.baseClasses, ...this.validationClasses })}"
        .value="${live(this.value)}"
        minlength="${ifDefined(this.minlength)}"
        maxlength="${ifDefined(this.maxlength)}"
        inputmode="email"
        ?multiple="${this.multiple}"
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
    'art-email-input': ArtEmailInput;
  }
}
