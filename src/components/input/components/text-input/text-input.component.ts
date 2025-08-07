import { BaseControl } from '@/shared/base';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';

@customElement('art-text-input')
export class ArtTextInput extends BaseControl {
  // UI/UX
  @property({ type: String }) placeholder?: string;
  @property({ type: Object }) datalist?: { name: string; options: string[] };

  // Validation
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
  @property({ type: String }) pattern?: string;

  static styles = [
    ...BaseControl.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  // Abstract

  renderControl() {
    return html`
      <input
        control
        type="text"
        id="${this.name}"
        name="${this.name}"
        title="${ifDefined(this.title)}"
        placeholder="${ifDefined(this.placeholder)}"
        class="${classMap({ ...this.baseClasses, ...this.validationClasses })}"
        .value="${live(this.value)}"
        list="${ifDefined(this.datalist?.name)}"
        pattern="${ifDefined(this.pattern)}"
        minlength="${ifDefined(this.minlength)}"
        maxlength="${ifDefined(this.maxlength)}"
        ?readonly=${this.readOnly}
        ?required=${this.required}
        ?disabled=${this.disabled}
        @input="${this.handleInput}"
        @change="${this.handleChange}" />
      ${when(this.datalist, () => this.renderDatalist())}
    `;
  }

  // Validation

  // TODO: add Validation through composition

  // Rendering

  // TODO: Implement composition over inheritanche to inject this. Create classes for text based inputs, numeric based inputs, date based input, etc and inject them.
  private renderDatalist() {
    if (this.datalist) {
      return html`
        <datalist id="${this.datalist.name}">
          ${map(this.datalist.options, option => html`<option value="${option}"></option>`)}
        </datalist>
      `;
    } else {
      return undefined;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-text-input': ArtTextInput;
  }
}
