import { getSharedTailwindStyles } from '@/styles';
import { generateRandomeString } from '@/utilities/string';
import { css, html, LitElement, type TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import type { ClassInfo } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';

export type InputType =
  | 'text'
  | 'search'
  | 'tel'
  | 'url'
  | 'password'
  | 'email'
  | 'number'
  | 'range'
  | 'date'
  | 'month'
  | 'week'
  | 'time'
  | 'datetime-local'
  | 'color'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden';

export type InputMode =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';

export type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export interface IDatalistConfig {
  list: string;
  options: Array<{ value: string; label: string }>;
}

/**
 * Main Base Class of all type of Base Class Elements. All form element share this.
 */
export abstract class BaseFormElement extends LitElement {
  @query('[control]') protected control!: FormElement;

  // UI/UX

  @property({ type: String }) label = 'Label';
  @property({ type: String }) name = `control-${generateRandomeString()}`;
  @property({ type: Boolean }) disabled = false;

  // Validation

  @property({ type: Boolean }) required = false;
  @property({ type: String }) value = '';

  // State

  @state() protected validationMessage = '';
  @state() protected isValid = true;

  // Events

  protected elementChangeEventName = 'art-control-change';

  // Getters

  protected get validationClasses(): ClassInfo {
    return {
      'ring-status-error': !this.isValid,
      'focus:ring-status-error': !this.isValid,
      'ring-border-default': this.isValid,
      'focus:ring-accent-primary': this.isValid,
    };
  }

  // Styles

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

  static styles = [getSharedTailwindStyles() || css``];

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
  abstract reset(): void;

  // Validations

  protected updateValidity() {
    const isValid = this.control.checkValidity();
    this.isValid = isValid;
    this.validationMessage = isValid ? '' : this.control.validationMessage;
  }

  // Handlers

  protected handleChange(event: MouseEvent) {
    const target = event.target as FormElement;
    this.value = target.value;
    this.updateValidity();
    this.dispatchEvent(
      new CustomEvent(this.elementChangeEventName, {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
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
}

/**
 * Base Class for all editable form elements:
 * Color Input
 * File Input
 * TextBasedFormElements
 * NumberBasedFormElements
 * DateBasedFormElements
 */
export abstract class EditableBasedFormElement extends BaseFormElement {
  // UI/UX

  @property({ type: String }) placeholder?: string;
  @property({ type: String }) inputmode = 'text';
  @property({ type: Object }) datalist?: IDatalistConfig;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) autofocus = false;

  // Events

  protected elementInputEventName = 'art-control-input';

  // Lifecycle

  protected render() {
    return html`
      <div class="flex flex-col gap-2">
        <!-- label -->
        <label id="label-${this.name}" for="${this.name}" class="font-semibold text-accent-primary">
          ${this.label}
        </label>
        <!-- Control -->
        <div>${this.renderControl()}</div>
        <!-- Error message -->
        ${when(!this.isValid, () => this.renderValidationMessage())}
      </div>
    `;
  }

  // Handlers

  protected handleInput(event: InputEvent) {
    const target = event.target as FormElement;
    this.value = target.value;
    this.updateValidity();
    this.dispatchEvent(
      new CustomEvent(this.elementInputEventName, {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Utils

  protected renderDatalist() {
    if (this.datalist) {
      return html`
        <datalist id="${this.datalist.list}">
          ${map(
            this.datalist.options,
            option => html`<option value="${option.value}">${option.label}</option>`
          )}
        </datalist>
      `;
    } else {
      return undefined;
    }
  }

  // API

  reset() {
    this.value = '';
    this.validationMessage = '';
    this.setCustomValidity('');
    this.checkValidity();
  }
}

/**
 * Base Class for all text-based form elements:
 * text, search, tel, email, url, password, textarea
 */
export abstract class TextBasedFormElement extends EditableBasedFormElement {
  // Validations

  @property({ type: Number }) maxlength?: number;
  @property({ type: Number }) minlength?: number;
  @property({ type: String }) pattern?: string;
}
