import { getSharedTailwindStyles } from '@/shared/styles';
import { generateRandomeString } from '@/shared/utilities';
import { LitElement, css, html, type TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import type { ClassInfo } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export abstract class BaseControl extends LitElement {
  @query('[control]') protected control!: Control;

  // Common UI/UX
  @property({ type: String }) label = 'Label';
  @property({ type: String }) name = `control-${generateRandomeString()}`;
  @property({ type: String }) value: string = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) readOnly = false;

  // Common Validation
  @property({ type: Boolean, reflect: true }) required = false;

  // Events
  protected controlInputEventName = 'art-control-input';
  protected controlChangeEventName = 'art-control-change';

  @state() protected validationMessage = '';
  @state() protected isValid = true;

  protected baseClasses: ClassInfo = {
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

  // Getters

  protected get validationClasses(): ClassInfo {
    return {
      'ring-status-error': !this.isValid,
      'focus:ring-status-error': !this.isValid,
      'ring-border-default': this.isValid,
      'focus:ring-accent-primary': this.isValid,
    };
  }

  static styles = [getSharedTailwindStyles() || css``];

  // Lifecycle

  protected render() {
    return html`
      <div class="flex flex-col gap-2">
        <!-- label -->
        <div>
          <label for="${this.name}" class="text-accent-primary font-semibold">${this.label}</label>
        </div>
        <!-- Control -->
        <div>${this.renderControl()}</div>
        <!-- Error message -->
        ${when(!this.isValid, () => this.renderValidationMessage())}
      </div>
    `;
  }

  // Rendering

  protected renderValidationMessage() {
    return html`
      <div class="text-status-error text-xs">
        <span>${this.validationMessage}</span>
      </div>
    `;
  }

  // Abstract

  protected abstract renderControl(): TemplateResult<1>;

  // Handlers

  protected handleInput(event: InputEvent) {
    const target = event.target as Control;
    this.value = target.value;
    this.updateValidity();
    this.dispatchEvent(
      new CustomEvent(this.controlInputEventName, {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected handleChange(event: MouseEvent) {
    const target = event.target as Control;
    this.value = target.value;
    this.updateValidity();
    this.dispatchEvent(
      new CustomEvent(this.controlChangeEventName, {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Validations

  private updateValidity() {
    const isValid = this.control.checkValidity();
    this.isValid = isValid;
    this.validationMessage = isValid ? '' : this.control.validationMessage;
  }

  // API

  checkValidity() {
    return this.control.checkValidity();
  }

  validity() {
    return this.control.validity;
  }

  reportValidity() {
    return this.control.reportValidity();
  }

  setCustomValidity(message: string) {
    this.control.setCustomValidity(message);
  }

  reset(): void {
    this.value = '';
    this.validationMessage = '';
    this.setCustomValidity('');
    this.checkValidity();
  }
}
