import { BaseControl } from '@/shared/base';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

@customElement('art-textarea')
export class ArtTextarea extends BaseControl {
  // UI/UX
  @property({ type: Number }) rows?: number;
  @property({ type: Number }) cols?: number;
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean }) autoGrow = false;

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

  renderControl() {
    return html`
      <textarea
        control
        id="${this.name}"
        name="${this.name}"
        class=${classMap({ ...this.baseClasses, ...this.validationClasses })}
        rows="${ifDefined(this.rows)}"
        cols="${ifDefined(this.cols)}"
        placeholder="${ifDefined(this.placeholder)}"
        .value="${live(this.value)}"
        minlength="${ifDefined(this.minlength)}"
        maxlength="${ifDefined(this.maxlength)}"
        ?readonly=${this.readOnly}
        ?required=${this.required}
        ?disabled=${this.disabled}
        @input=${this.onInput}
        @change="${this.handleChange}">
      </textarea>
    `;
  }

  onInput(event: InputEvent) {
    this.handleInput(event);
    if (this.autoGrow) {
      this.fitToContent();
    }
  }

  fitToContent() {
    this.control.style.height = 'auto';
    this.control.style.height = this.control.scrollHeight + 'px';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-textarea': ArtTextarea;
  }
}
