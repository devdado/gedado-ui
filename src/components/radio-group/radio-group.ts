import { getSharedTailwindStyles } from '@/styles';
import type { ArtVariant } from '@/types/core';
import { generateSecureUID } from '@/utilities/string';
import { LitElement, css, html, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import type { IArtRadioButton, IArtRadioGroup, RadioGroupLayout } from './types';

@customElement('art-radio-group')
export class ArtRadioGroup extends LitElement implements IArtRadioGroup {
  // UI/UX
  @property({ type: String }) name = `radio-${generateSecureUID()}`;
  @property({ type: String }) legend = 'Radio Group';
  @property({ type: String }) variant: ArtVariant = 'primary';
  @property({ type: Array }) radioButtons: IArtRadioButton[] = [];
  @property({ type: String }) layout: RadioGroupLayout = 'horizontal';

  // Validation
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) value?: string;

  // State
  @state() selectedValue?: string;

  private radioClassMap?: ClassInfo;
  private layoutClassMap?: ClassInfo;
  private labelClassMap?: ClassInfo;

  // Styling
  static styles = [
    getSharedTailwindStyles() || css``,
    css`
      :host {
        display: block;
      }
    `,
  ];

  // Lifecycle

  connectedCallback() {
    super.connectedCallback();
    this.selectedValue = this.value;
  }

  protected willUpdate(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('value')) {
      this.selectedValue = this.value;
    }

    if (_changedProperties.has('variant')) {
      this.setRadioCladdMap();
    }

    if (_changedProperties.has('disabled')) {
      this.setLabelClassMap();
    }

    if (_changedProperties.has('layout')) {
      this.setLayoutClassMap();
    }
  }

  render() {
    return html`
      <fieldset class="rounded border border-gray-300 p-4">
        <legend class="px-2 text-sm">${this.legend}</legend>
        <div class="${classMap(this.layoutClassMap!)}">${map(this.radioButtons, radio => this.renderRadioButton(radio))}</div>
      </fieldset>
    `;
  }

  // Rendering

  private renderRadioButton(radio: IArtRadioButton) {
    // const radioClassMap = this.setRadioButtonVariantClassMap(radio);

    return html`
      <div class="flex gap-2">
        <input
          data-testid="art-radio-${this.name}"
          type="radio"
          id="${radio.id}"
          name="${this.name}"
          value="${radio.value}"
          class="${classMap(this.radioClassMap!)}"
          ?checked="${this.value && this.value === radio.value ? true : false}"
          ?disabled="${this.disabled}"
          @change="${this.onChange}" />
        <label for="${radio.id}" class="${classMap(this.labelClassMap!)}">${radio.label}</label>
      </div>
    `;
  }

  // Event Handlers

  private onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedValue = target.value;

    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { name: this.name, value: this.selectedValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  // Utils

  private setLayoutClassMap() {
    this.layoutClassMap = {
      flex: true,
      'gap-2': true,
      'flex-col': this.layout === 'vertical',
      'flex-row': this.layout === 'horizontal',
    };
  }

  private setLabelClassMap() {
    this.labelClassMap = {
      'text-text-disabled': this.disabled,
      'text-text-default': !this.disabled,
      'cursor-pointer': true,
      'select-none': true,
    };
  }

  private setRadioCladdMap() {
    this.radioClassMap = {
      'accent-accent-primary': this.variant === 'primary',
      'accent-accent-secondary': this.variant === 'secondary',
      'accent-status-success': this.variant === 'success',
      'accent-status-warning': this.variant === 'warning',
      'accent-status-error': this.variant === 'error',
      'accent-status-info': this.variant === 'info',
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-radio-group': ArtRadioGroup;
  }
}
