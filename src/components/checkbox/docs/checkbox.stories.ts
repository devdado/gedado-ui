import { artVariants } from '@/types/core';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/internal/test';
import '../checkbox';
import type { ArtCheckbox } from '../checkbox';
import type { IArtCheckbox } from '../types';

const meta: Meta<IArtCheckbox> = {
  title: 'Components/Checkbox',
  component: 'art-checkbox',
  argTypes: {
    id: {
      control: 'text',
      description: 'The checkbox ID',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
        defaultValue: {
          summary: 'control-<random-UID>',
          detail: 'control-<random-UID> is a default auto-generated value',
        },
      },
    },
    name: {
      control: 'text',
      description: 'The checkbox name',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
        defaultValue: {
          summary: 'control-<random-UID>',
          detail: 'control-<random-UID> is a default auto-generated value',
        },
      },
    },
    label: {
      control: 'text',
      description: 'The text of the label associated to the checkbox',
      table: {
        category: 'UI/UX',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: 'select',
      type: 'string',
      options: artVariants,
      description: 'The checkbox color',
      table: {
        category: 'UI/UX',
        type: { summary: 'ArtVariant' },
        defaultValue: { summary: 'primary' },
      },
      required: false,
    },
    checked: {
      control: 'boolean',
      description: 'If "true", the checkbox is checked',
      table: {
        category: 'Validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'If "true", a value must be specified for the textarea to be valid',
      table: {
        category: 'Validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If "true", the checkbox is inmutable and not clickable',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    id: 'control-155ef6df-75e7-41d2-ac11-c0e775529570',
    name: 'control-155ef6df-75e7-41d2-ac11-c0e775529570',
    label: undefined,
    variant: 'primary',
    checked: false,
    required: false,
    disabled: false,
  },
  parameters: {
    actions: {
      handles: ['change'],
    },
  },
};

export default meta;
type Story = StoryObj<IArtCheckbox>;

const Template = (args: IArtCheckbox) => {
  return html`
    <art-checkbox
      id="${args.id}"
      name="${args.name}"
      label="${ifDefined(args.label)}"
      variant="${args.variant}"
      ?checked="${args.checked}"
      ?required="${args.required}"
      ?disabled="${args.disabled}">
    </art-checkbox>
  `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-checkbox') as ArtCheckbox;

    if (!component) {
      throw new Error('Component not found');
    }

    await expect(component).toBeDefined();
  },
};

export const Variant: Story = {
  render: Template,
  args: {
    variant: 'success',
  },
};

export const WithLabel: Story = {
  render: Template,
  name: 'With Label',
  args: {
    label: 'Label',
  },
};

export const Invalid: Story = {
  render: Template,
  args: {
    label: 'Invalid Comment',
    required: true,
  },
};

export const DisabledUnchecked: Story = {
  render: Template,
  name: 'Disabled Unchecked',
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: Template,
  name: 'Disabled Empty',
  args: {
    label: 'Disabled',
    disabled: true,
    checked: true,
  },
};
