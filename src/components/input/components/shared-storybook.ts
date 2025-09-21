import type { Meta } from '@storybook/web-components-vite';
import type { IBaseArtInput } from './types';

export const sharedInputMeta: Meta<IBaseArtInput> = {
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
    placeholder: {
      control: 'text',
      description: 'The text displayed in the input when it has no value',
      table: {
        category: 'UI/UX',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'If "true", the input is inmutable',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  },
  args: {
    id: 'control-155ef6df-75e7-41d2-ac11-c0e775529570',
    name: 'control-155ef6df-75e7-41d2-ac11-c0e775529570',
    label: undefined,
    placeholder: undefined,
    value: '',
    required: false,
    readonly: false,
    disabled: false,
  },
  parameters: {
    actions: {
      handles: ['update'],
    },
  },
};
