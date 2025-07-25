import { getSharedTailwindStyles } from '@/styles/injectables/shared-tailwind';
import { generateRandomeString } from '@/utilities/string.util';
import { LitElement, css, html, type PropertyValues, type TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

export abstract class BaseInput extends LitElement {
  @query('input') protected input!: HTMLInputElement;

  // Common UI
  @property({ type: String }) label = 'Label';
  @property({ type: String }) name = `input-${generateRandomeString()}`;
  @property({ type: String }) value: string = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) readOnly = false;

  // Common Validation
  @property({ type: Boolean, reflect: true }) required = false;

  @state() protected validationMessage = '';
  @state() protected isValid = false;
  @state() protected inputClasses = {};

  static styles = [
    getSharedTailwindStyles() || css``,
    css`
      :host {
        display: block;
      }
    `,
  ];

  // Lifecycle

  protected updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('isValid')) {
      this.setInpuClasses();
    }
  }

  protected render() {
    return html`
      <div class="flex flex-col gap-2">
        <!-- label -->
        <div>
          <label for="${this.name}" class="font-semibold text-accent-primary">${this.label}</label>
        </div>
        <!-- Control -->
        <div>${this.renderControl()}</div>
        <!-- Error message -->
        ${when(!this.isValid, () => this.renderValidationMessage())}
      </div>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    requestAnimationFrame(() => {
      this.updateValidity();
      this.setInpuClasses();
    });
  }

  // Rendering

  protected renderValidationMessage() {
    return html`
      <div class="text-xs text-status-error">
        <span>${this.validationMessage}</span>
      </div>
    `;
  }

  // Abstract

  protected abstract renderControl(): TemplateResult<1>;

  // Handlers

  protected handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.updateValidity();
    this.dispatchEvent(
      new CustomEvent('art-input-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected handleChange(_: Event) {
    this.dispatchEvent(
      new CustomEvent('art-input-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Validations

  private updateValidity() {
    const isValid = this.input.checkValidity();
    this.isValid = isValid;
    this.validationMessage = isValid ? '' : this.input.validationMessage;
  }

  // Utils

  private setInpuClasses() {
    const fixedClasses = {
      'w-full': true,
      'inline-block': true,
      'rounded-md': true,
      'bg-white': true,
      'p-1': true,
      'text-text-default': true,
      'ring-1': true,
      'placeholder:text-text-muted': true,
      'focus:outline-none': true,
      'disabled:bg-disabled': true,
      'disabled:text-text-disabled': true,
    };

    this.inputClasses = {
      ...fixedClasses,
      'ring-status-error': !this.isValid,
      'focus:ring-status-error': !this.isValid,
      'ring-border-default': this.isValid,
      'focus:ring-accent-primary': this.isValid,
    };
  }

  // API

  checkValidity() {
    return this.input.checkValidity();
  }

  validity() {
    return this.input.validity;
  }

  reportValidity() {
    return this.input.reportValidity();
  }

  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
  }

  reset(): void {
    this.value = '';
    this.validationMessage = '';
    this.setCustomValidity('');
    this.checkValidity();
  }
}
