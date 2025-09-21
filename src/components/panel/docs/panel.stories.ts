import { artVariants } from '@/types/core';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../panel';
import type { IArtPanel } from '../types';

const meta: Meta<IArtPanel> = {
  title: 'Components/Panel',
  component: 'art-panel',
  argTypes: {
    variant: {
      control: 'select',
      type: 'string',
      options: artVariants,
      description: 'The panel color',
      table: {
        category: 'UI/UX',
        type: { summary: 'Variant | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    title: {
      control: 'text',
      description: 'The title displayed in the panel',
      table: {
        category: 'UI/UX',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    variant: undefined,
    title: undefined,
  },
};

export default meta;
type Story = StoryObj<IArtPanel>;

const Template = (args: IArtPanel) => {
  return html`
    <art-panel variant="${ifDefined(args.variant)}" title="${ifDefined(args.title)}">
      <p>This is the Panel content</p>
    </art-panel>
  `;
};

export const Default: Story = {
  render: Template,
};

export const Variant: Story = {
  render: Template,
  args: {
    variant: 'primary',
  },
};

export const Title: Story = {
  render: Template,
  name: 'With Title',
  args: {
    title: 'Primary',
    variant: undefined,
  },
};
