import { BaseControl } from '@/shared/base';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { map } from 'lit/directives/map.js';
import type { IArtSelectOption } from './types';

@customElement('art-select')
export class ArtSelect extends BaseControl {
  // UI/UX
  @property({ type: Array }) options: IArtSelectOption[] = [];
  @property({ type: Number }) size?: number;

  static styles = [
    ...BaseControl.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  protected renderControl() {
    return html`
      <select
        control
        id="${this.name}"
        name="${this.name}"
        class=${classMap({ ...this.baseClasses, ...this.validationClasses })}
        size="${ifDefined(this.size)}"
        .value="${live(this.value)}"
        ?required=${this.required}
        ?disabled=${this.disabled}
        @change="${this.handleChange}">
        ${map(this.options, option => this.renderOption(option, this.value))}
      </select>
    `;
  }

  private renderOption(option: IArtSelectOption, currentvalue: string) {
    return html`
      <option value="${option.value}" ?selected="${option.value === currentvalue}">
        ${option.name}
      </option>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-select': ArtSelect;
  }
}
