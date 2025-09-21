import { renderValidationMessage } from '@/shared/parts';
import { getSharedTailwindStyles } from '@/styles';
import type { ArtVariant } from '@/types/core';
import { generateSecureUID } from '@/utilities/string';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import type { IArtCheckbox } from './types';

@customElement('art-checkbox')
export class ArtCheckbox extends LitElement implements IArtCheckbox {
  // UI/UX
  @property({ type: String, attribute: false }) id: string;
  @property({ type: String }) name: string;
  @property({ type: String }) label?: string;
  @property({ type: String }) variant: ArtVariant = 'primary';

  // Validation
  @property({ type: Boolean, attribute: true }) checked = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) disabled = false;

  // State
  @state() private internalChecked = true;
  @state() private validationMessage = 'This is Required';

  // Styling

  private variantClassMap?: ClassInfo;
  private labelClassMap?: ClassInfo;
  private checkboxClassMap: ClassInfo = {
    peer: true,
    relative: true,
    'h-4': true,
    'w-4': true,
    'cursor-pointer': true,
    'appearance-none': true,
    "before:content['']": true,
    'before:block': true,
    'before:absolute': true,
    'before:h-9': true,
    'before:w-9': true,
    'before:bg-gray-400': true,
    border: true,
    'border-gray-400': true,
    'rounded-sm': true,
    'before:rounded-full': true,
    'transition-all': true,
    'before:opacity-0': true,
    'before:transition-opacity': true,
    'before:top-2/4': true,
    'before:left-2/4': true,
    'before:-translate-x-2/4': true,
    'before:-translate-y-2/4': true,
    'hover:before:opacity-10': true,
    'disabled:border-gray-300': true,
    'disabled:bg-gray-200': true,
    'disabled:before:bg-transparent': true,
  };
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

  connectedCallback() {
    super.connectedCallback();
    this.internalChecked = this.checked;
    this.setVariantClassMap();
    this.setLabelClassMap();
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('checked')) {
      this.internalChecked = this.checked;
    }
  }

  render() {
    return html`
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-1">${this.renderCheckbox()} ${when(this.label, () => this.renderLabel())}</div>
        ${when(
          this.required && !this.internalChecked,
          () => html` <div class="pl-1">${renderValidationMessage({ message: this.validationMessage })}</div> `
        )}
      </div>
    `;
  }

  // Rendering

  private renderCheckbox() {
    return html`
      <label for="${this.id}" class="relative flex cursor-pointer items-center rounded-full p-1" data-ripple-dark="true">
        <input
          data-testid="art-checkbox"
          type="checkbox"
          id="${this.id}"
          class="${classMap({ ...this.checkboxClassMap, ...this.variantClassMap })}"
          ?checked="${this.internalChecked}"
          ?required=${this.required}
          ?disabled=${this.disabled}
          @change="${this.onChange}" />
        <div
          class="pointer-events-none absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </label>
    `;
  }

  private renderLabel() {
    return html` <label class="${classMap(this.labelClassMap!)}" for="${this.id}"> ${this.label} </label> `;
  }

  // Event Handlers

  private onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.internalChecked = target.checked;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { checked: this.internalChecked },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Utils

  private setLabelClassMap() {
    this.labelClassMap = {
      'text-text-disabled': this.disabled,
      'text-text-text-default': !this.disabled,
      'cursor-pointer': true,
      'select-none': true,
    };
  }

  private setVariantClassMap() {
    this.variantClassMap = {
      'checked:bg-accent-primary': this.variant === 'primary',
      'checked:before:bg-accent-primary': this.variant === 'primary',
      'checked:border-accent-primary': this.variant === 'primary',
      'checked:bg-accent-secondary': this.variant === 'secondary',
      'checked:before:bg-accent-secondary': this.variant === 'secondary',
      'checked:border-accent-secondary': this.variant === 'secondary',
      'checked:bg-status-success': this.variant === 'success',
      'checked:before:bg-status-success': this.variant === 'success',
      'checked:border-status-success': this.variant === 'success',
      'checked:bg-status-warning': this.variant === 'warning',
      'checked:before:bg-status-warning': this.variant === 'warning',
      'checked:border-status-warning': this.variant === 'warning',
      'checked:bg-status-error': this.variant === 'error',
      'checked:before:bg-status-error': this.variant === 'error',
      'checked:border-status-error': this.variant === 'error',
      'checked:bg-status-info': this.variant === 'info',
      'checked:before:bg-status-info': this.variant === 'info',
      'checked:border-status-info': this.variant === 'info',
      'checked:bg-status-neutral': this.variant === 'neutral',
      'checked:before:bg-status-neutral': this.variant === 'neutral',
      'checked:border-status-neutral': this.variant === 'neutral',
    };
  }

  // API

  checkValidity() {
    return this.internalChecked;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-checkbox': ArtCheckbox;
  }
}
