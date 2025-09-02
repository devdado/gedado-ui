import { renderLabel, renderValidationMessage } from '@/shared/parts';
import { getSharedTailwindStyles } from '@/styles';
import { generateSecureUID } from '@/utilities/string';
import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';
import type { IArtSelect, IArtSelectOption } from './types';

@customElement('art-select')
export class ArtSelect extends LitElement implements IArtSelect {
  @query('select') private selectElement!: HTMLSelectElement;

  // UI/UX
  @property({ type: String, attribute: false }) id: string;
  @property({ type: String }) name: string;
  @property({ type: String }) label?: string;
  @property({ type: Number }) size = 0;
  @property({ type: Boolean }) multiple = false;
  @property({ type: Array }) options: IArtSelectOption[] = [];

  // Validation
  @property({ type: String }) value = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) disabled = false;

  // State
  @state() protected internalValue = '';
  @state() private isValid?: boolean;
  @state() private validationMessage?: string;

  static styles = [
    getSharedTailwindStyles() || css``,
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    const UID = `control-${generateSecureUID()}`;
    this.id = UID;
    this.name = UID;
  }

  // Lifecycle

  protected willUpdate(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('value')) {
      this.internalValue = this.value;
    }
  }

  protected render() {
    return html`
      <div class="flex flex-col gap-1">
        ${when(this.label, () => renderLabel({ inputId: this.id, text: this.label! }))}
        <div class="flex flex-col gap-2">
          <select
            data-testid="art-select"
            id="${this.name}"
            class="art-control"
            name="${this.name}"
            size="${this.size}"
            ?multiple="${this.multiple}"
            ?required=${this.required}
            ?disabled=${this.disabled}
            @change="${this.onChange}">
            ${map(this.options, option => this.renderOption(option, this.value))}
          </select>
          ${when(this.validationMessage, () =>
            renderValidationMessage({ message: this.validationMessage! })
          )}
        </div>
      </div>
    `;
  }

  // Rendering

  private renderOption(option: IArtSelectOption, currentvalue: string) {
    return html`
      <option value="${option.value}" ?selected="${option.value === currentvalue}">
        ${option.name}
      </option>
    `;
  }

  // Event Listeners

  private onChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    this.internalValue = target.value;
    this.checkValidity();

    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { value: this.internalValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  // API

  checkValidity() {
    this.isValid = this.selectElement.checkValidity();
    this.validationMessage = this.isValid ? '' : this.selectElement.validationMessage;
    return this.isValid;
  }

  reset() {
    this.value = '';
    this.checkValidity();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-select': ArtSelect;
  }
}
