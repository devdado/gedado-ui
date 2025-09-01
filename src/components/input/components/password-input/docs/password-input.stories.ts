import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/internal/actions';
import { expect } from 'storybook/internal/test';
import { sharedInputMeta } from '../../shared-storybook';
import '../password-input';
import type { ArtPasswordInput } from '../password-input';
import type { IArtPasswordInput } from '../types';

const meta: Meta<IArtPasswordInput> = {
  ...sharedInputMeta,
  title: 'Components/Inputs/Password Text',
  component: 'art-password-input',
  argTypes: {
    ...sharedInputMeta.argTypes,
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
    pattern: {
      control: 'text',
      description: 'A regular expression the input value must match',
      table: {
        category: 'Validation',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    ...sharedInputMeta.args,
    minlength: 0,
    maxlength: 524288,
    pattern: undefined,
  },
};

export default meta;
type Story = StoryObj<IArtPasswordInput>;

const Template = (args: IArtPasswordInput) => {
  return html`
    <div class="w-[250px]">
      <art-password-input
        id="${args.name}"
        name="${args.name}"
        label="${ifDefined(args.label)}"
        placeholder="${ifDefined(args.placeholder)}"
        value="${args.value}"
        pattern="${ifDefined(args.pattern)}"
        minlength="${args.minlength}"
        maxlength="${args.maxlength}"
        ?required="${args.required}"
        ?readonly="${args.readonly}"
        ?disabled="${args.disabled}"
        @update="${action('update')}">
      </art-password-input>
    </div>
  `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-password-input') as ArtPasswordInput;

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
    placeholder: 'Write a password',
  },
};

export const Invalid: Story = {
  render: Template,
  args: {
    label: 'Invalid Password. At least one special character',
    placeholder: 'Write a password with at least one special character',
    value: 'abc',
    pattern: '^(?=.*[^A-Za-z0-9]).+$',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled',
    value: 'abcdefg',
    disabled: true,
  },
};
