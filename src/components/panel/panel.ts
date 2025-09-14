import { getSharedTailwindStyles } from '@/styles';
import type { ArtVariant } from '@/types/core';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import type { IArtPanel } from './types';

@customElement('art-panel')
export class ArtPanel extends LitElement implements IArtPanel {
  // UI/UX
  @property({ type: String }) variant?: ArtVariant;

  // Class Maps
  private panelClassMap?: ClassInfo;
  private panelVariantClassMap?: ClassInfo;
  private panelBorderClassMap?: ClassInfo;
  private titleVariantClassMap?: ClassInfo;
  private panelFixedClassMap?: ClassInfo = {
    flex: true,
    'flex-col': true,
    'gap-2': true,
    'p-5': true,
    'shadow-sm': true,
  };

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

  connectedCallback(): void {
    super.connectedCallback();
    this.setPanelClassMap();
    this.setTitleVariantClassMap();
  }

  render() {
    return html`
      <div class="${classMap(this.panelClassMap!)}">
        ${when(this.title, () => html`<h1 class="${classMap(this.titleVariantClassMap!)} text-sm font-semibold uppercase">${this.title}</h1>`)}
        <slot class="text-text-default"></slot>
      </div>
    `;
  }

  // utils

  private setPanelClassMap() {
    this.setVariantClassMap();
    this.setPanelBorderClassMap();

    this.panelClassMap = {
      ...this.panelFixedClassMap,
      ...this.panelVariantClassMap,
      ...this.panelBorderClassMap,
    };
  }

  private setPanelBorderClassMap() {
    this.panelBorderClassMap = {
      border: true,
      'rounded-lg': true,
      'border-border-default': this.variant === undefined,
      'border-accent-primary-lightest/30': this.variant === 'primary',
      'border-accent-secondary-lightest/30': this.variant === 'secondary',
      'border-status-success-lightest/30': this.variant === 'success',
      'border-status-warning-lightest/30': this.variant === 'warning',
      'border-status-error-lightest/30': this.variant === 'error',
      'border-status-info-lightest/30': this.variant === 'info',
      'border-status-neutral-lightest/30': this.variant === 'neutral',
    };
  }

  private setVariantClassMap() {
    this.panelVariantClassMap = {
      'bg-panel': this.variant === undefined,
      'bg-accent-primary-lightest/20': this.variant === 'primary',
      'bg-accent-secondary-lightest/20': this.variant === 'secondary',
      'bg-status-success-lightest/20': this.variant === 'success',
      'bg-status-warning-lightest/20': this.variant === 'warning',
      'bg-status-error-lightest/20': this.variant === 'error',
      'bg-status-info-lightest/20': this.variant === 'info',
      'bg-status-neutral-lightest/20': this.variant === 'neutral',
    };
  }

  private setTitleVariantClassMap() {
    this.titleVariantClassMap = {
      'text-accent-primary': this.variant === undefined || this.variant === 'primary',
      'text-accent-secondary': this.variant === 'secondary',
      'text-status-success': this.variant === 'success',
      'text-status-warning': this.variant === 'warning',
      'text-status-error': this.variant === 'error',
      'text-status-info': this.variant === 'info',
      'text-status-neutral': this.variant === 'neutral',
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'art-panel': ArtPanel;
  }
}
