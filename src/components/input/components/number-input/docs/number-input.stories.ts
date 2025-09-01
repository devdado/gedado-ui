import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/internal/actions';
import { expect } from 'storybook/internal/test';
import { sharedInputMeta } from '../../shared-storybook';
import '../number-input';
import type { ArtNumberInput } from '../number-input';
import type { IArtNumberInput } from '../types';

const meta: Meta<IArtNumberInput> = {
  ...sharedInputMeta,
  title: 'Components/Inputs/Number Input',
  component: 'art-number-input',
  argTypes: {
    ...sharedInputMeta.argTypes,
    min: {
      control: 'number',
      description: 'The minimum number that can be entered',
      table: {
        category: 'Validation',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'number',
      description: 'The maximum number that can be entered',
      table: {
        category: 'Validation',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    step: {
      control: 'number',
      description: 'The increment interval between values',
      table: {
        category: 'Validation',
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    ...sharedInputMeta.args,
    min: undefined,
    max: undefined,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<IArtNumberInput>;

const Template = (args: IArtNumberInput) => {
  return html`
    <div class="w-[250px]">
      <art-number-input
        id="${args.name}"
        name="${args.name}"
        label="${ifDefined(args.label)}"
        placeholder="${ifDefined(args.placeholder)}"
        value="${args.value}"
        min="${ifDefined(args.min)}"
        max="${ifDefined(args.max)}"
        step="${args.step}"
        ?required="${args.required}"
        ?readonly="${args.readonly}"
        ?disabled="${args.disabled}"
        @update="${action('update')}">
      </art-number-input>
    </div>
  `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-number-input') as ArtNumberInput;

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
    placeholder: 'Write a number',
  },
};

export const Invalid: Story = {
  render: Template,
  args: {
    label: 'Invalid Number',
    placeholder: 'Write a number bigger than 4',
    value: '1',
    min: 5,
    required: true,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled',
    value: '10',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  render: Template,
  name: 'Read Only',
  args: {
    label: 'Read Only',
    value: '10',
    readonly: true,
  },
};

export const Step: Story = {
  render: Template,
  name: 'Step 2',
  args: {
    label: 'Number increase/decrease by 2',
    placeholder: 'Step 2',
    step: 2,
    value: '2',
  },
};
