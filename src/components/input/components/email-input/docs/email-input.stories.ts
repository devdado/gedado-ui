import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/internal/actions';
import { expect } from 'storybook/internal/test';
import { sharedInputMeta } from '../../shared-storybook';
import '../email-input';
import type { ArtEmailInput } from '../email-input';
import type { IArtEmailInput } from '../types';

const meta: Meta<IArtEmailInput> = {
  ...sharedInputMeta,
  title: 'Components/Inputs/Email Input',
  component: 'art-email-input',
  argTypes: {
    ...sharedInputMeta.argTypes,
    multiple: {
      control: 'boolean',
      type: 'boolean',
      description: 'Does the input accepts more than one email?',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    minlength: {
      control: 'number',
      description: 'The minimum number of characters that the user can enter',
      table: {
        category: 'Validation',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    maxlength: {
      control: 'number',
      description: 'The maximum number of characters that the user can enter',
      table: {
        category: 'Validation',
        type: { summary: 'number' },
        defaultValue: { summary: '524288' },
      },
    },
  },
  args: {
    ...sharedInputMeta.args,
    minlength: 0,
    maxlength: 524288,
    multiple: false,
  },
};

export default meta;
type Story = StoryObj<IArtEmailInput>;

const Template = (args: IArtEmailInput) => {
  return html`
    <div class="w-[250px]">
      <art-email-input
        id="${args.name}"
        name="${args.name}"
        label="${ifDefined(args.label)}"
        placeholder="${ifDefined(args.placeholder)}"
        value="${args.value}"
        minlength="${args.minlength}"
        maxlength="${args.maxlength}"
        ?required="${args.required}"
        ?readonly="${args.readonly}"
        ?disabled="${args.disabled}"
        ?multiple="${args.multiple}"
        @update="${action('update')}">
      </art-email-input>
    </div>
  `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-email-input') as ArtEmailInput;

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
    placeholder: 'Write an email',
  },
};

export const Invalid: Story = {
  render: Template,
  args: {
    label: 'Invalid Email',
    placeholder: 'Write an email without "@" or empty the input',
    value: 'invalid',
    required: true,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled',
    value: 'input value',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  render: Template,
  name: 'Read Only',
  args: {
    label: 'Read Only',
    value: 'input value',
    readonly: true,
  },
};

export const Multiple: Story = {
  render: Template,
  args: {
    label: 'Multiple',
    multiple: true,
    placeholder: 'alice@example.com, bob@example.com',
    value: 'alice@example.com, bob@example.com',
  },
};
