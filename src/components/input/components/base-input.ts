import { renderLabel, renderValidationMessage } from '@/shared/parts';
import { getSharedTailwindStyles } from '@/styles';
import { generateSecureUID } from '@/utilities/string';
import { LitElement, css, html, type PropertyValues, type TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import type { IBaseArtInput } from './types';

export abstract class BaseArtInput extends LitElement implements IBaseArtInput {
  @query('input') private inputElement!: HTMLInputElement;

  // UI/UX
  @property({ type: String, attribute: false }) id: string;
  @property({ type: String }) name: string;
  @property({ type: String }) label?: string;
  @property({ type: String }) placeholder?: string;

  // Validations
  @property({ type: String }) value = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) readonly = false;
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

  protected firstUpdated(): void {
    Promise.resolve().then(() => this.checkValidity());
  }

  protected render() {
    return html`
      <div class="flex flex-col gap-1">
        ${when(this.label, () => renderLabel({ inputId: this.id, text: this.label! }))}
        <div class="flex flex-col gap-2">
          ${this.renderInput()} ${when(this.validationMessage, () => renderValidationMessage({ message: this.validationMessage! }))}
        </div>
      </div>
    `;
  }

  // Rendering

  protected abstract renderInput(): TemplateResult | null;

  // Event Listeners

  protected onInput(event: InputEvent) {
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
    this.isValid = this.inputElement.checkValidity();
    this.validationMessage = this.isValid ? '' : this.inputElement.validationMessage;
    return this.isValid;
  }

  reset() {
    this.value = '';
    this.checkValidity();
  }
}
