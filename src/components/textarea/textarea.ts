import { renderLabel, renderValidationMessage } from '@/shared/parts';
import { getSharedTailwindStyles } from '@/styles';
import { generateSecureUID } from '@/utilities/string';
import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import type { IArtTextarea } from './types';

@customElement('art-textarea')
export class ArtTextarea extends LitElement implements IArtTextarea {
  @query('textarea') private textareaElement!: HTMLTextAreaElement;

  // UI/UX
  @property({ type: String, attribute: false }) id: string;
  @property({ type: String }) name: string;
  @property({ type: String }) label?: string;
  @property({ type: String }) placeholder?: string;
  @property({ type: Number }) rows = 2;
  @property({ type: Number }) cols = 20;
  @property({ type: String }) wrap: 'hard' | 'soft' = 'soft';
  @property({ type: Boolean }) autogrow = false;

  // Validation
  @property({ type: String }) value = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Number }) minlength = 0;
  @property({ type: Number }) maxlength = 524288;

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
          <textarea
            data-testid="art-textarea"
            id="${this.name}"
            name="${this.name}"
            class="art-control"
            rows="${this.rows}"
            cols="${this.cols}"
            wrap="${this.wrap}"
            placeholder="${ifDefined(this.placeholder)}"
            .value="${this.internalValue}"
            minlength="${this.minlength}"
            maxlength="${this.maxlength}"
            ?required=${this.required}
            ?readonly=${this.readonly}
            ?disabled=${this.disabled}
            @input=${this.onInput}>
          </textarea>
          ${when(this.validationMessage, () => renderValidationMessage({ message: this.validationMessage! }))}
        </div>
      </div>
    `;
  }

  // Event Listeners

  protected onInput(event: InputEvent) {
    const target = event.target as HTMLTextAreaElement;
    this.internalValue = target.value;
    this.checkValidity();

    if (this.autogrow) {
      this.fitToContent();
    }

    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { value: this.internalValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Utils

  private fitToContent() {
    this.textareaElement.style.height = 'auto';
    this.textareaElement.style.height = this.textareaElement.scrollHeight + 'px';
  }

  // API

  checkValidity() {
    this.isValid = this.textareaElement.checkValidity();
    this.validationMessage = this.isValid ? '' : this.textareaElement.validationMessage;
    return this.isValid;
  }

  reset() {
    this.value = '';
    this.checkValidity();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-textarea': ArtTextarea;
  }
}
