import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/internal/actions';
import { expect } from 'storybook/internal/test';
import '../select';
import type { ArtSelect } from '../select';
import type { IArtSelect } from '../types';

const meta: Meta<IArtSelect> = {
  title: 'Components/Select',
  component: 'art-select',
  argTypes: {
    id: {
      control: 'text',
      description: 'The input ID',
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
      description: 'The input name',
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
      description: 'The text of the label associated to the input',
      table: {
        category: 'UI/UX',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: 'number',
      description:
        'The control is presented as a scrolling list box. This attribute represents the number of rows in the list that should be visible at one time.',
      table: {
        category: 'UI/UX',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If "true", the input is inmutable and not focusable',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      type: 'boolean',
      description: 'Does the select allow to select multiple options?',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: 'text',
      description: 'Use this to set an initial value',
      table: {
        category: 'Validation',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    required: {
      control: 'boolean',
      description: 'If "true", a value must be specified for the input to be valid',
      table: {
        category: 'Validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    options: {
      control: 'object',
      type: 'symbol',
      description: 'The options of the select',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'IArtSelectOption[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {
    id: 'control-155ef6df-75e7-41d2-ac11-c0e775529570',
    name: 'control-155ef6df-75e7-41d2-ac11-c0e775529570',
    label: '',
    size: 0,
    value: '',
    required: false,
    disabled: false,
    multiple: false,
    options: [
      { value: '1', name: 'Option 1' },
      { value: '2', name: 'Option 2' },
      { value: '3', name: 'Option 3' },
      { value: '4', name: 'Option 4' },
      { value: '5', name: 'Option 5' },
    ],
  },
  parameters: {
    actions: {
      handles: ['update'],
    },
  },
};

export default meta;
type Story = StoryObj<IArtSelect>;

const Template = (args: IArtSelect) => {
  return html`
    <div class="w-[250px]">
      <art-select
        id="${args.name}"
        label="${ifDefined(args.label)}"
        name="${args.name}"
        size="${args.size}"
        value="${args.value}"
        ?multiple="${args.multiple}"
        ?disabled="${args.disabled}"
        ?required="${args.required}"
        .options=${args.options}
        @update="${action('update')}">
      </art-select>
    </div>
  `;
};

export const Default: Story = {
  render: Template,
  args: {
    options: [],
  },
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-select') as ArtSelect;

    if (!component) {
      throw new Error('Component not found');
    }

    const isValid = component.checkValidity();
    await expect(isValid).toBe(true);
  },
};

export const WithLabel: Story = {
  render: Template,
  name: 'With Label',
  args: {
    label: 'Label',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled',
    value: '1',
    disabled: true,
  },
};

export const Multiple: Story = {
  render: Template,
  args: {
    label: 'Multiple',
    multiple: true,
  },
};

export const Size: Story = {
  render: Template,
  args: {
    label: 'Size 5',
    size: 5,
    multiple: false,
  },
};
