import { type IBaseFormControlProps } from '@/types/form';
import type {
  INumberBasedControlProps,
  ISelectBasedControlProps,
  ITextBasedControlProps,
} from '@/types/form_/form-control-common-bases';
import type { Meta } from '@storybook/web-components-vite';

export const BaseControlMeta = {
  argTypes: {
    label: {
      control: 'text',
      type: 'string',
      description: 'The control label',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'Label' },
      },
      required: false,
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The unique name of the control. Serves also as ID',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'control-<unique-random-string>' },
      },
      required: false,
    },
    title: {
      control: 'text',
      type: 'string',
      description: 'The text of the popover displayed on hover',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Is the control disabled?',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      description: 'Is the control required?',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
    autofocus: {
      control: 'boolean',
      type: 'boolean',
      description: 'Should be focused on page load?',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
  },
  args: {
    label: 'Label',
    name: 'control-a1b2c3d4e5',
    title: undefined,
    disabled: false,
    required: false,
    autofocus: false,
  },
  parameters: {
    actions: {
      handles: ['art-control-input', 'art-control-change'],
    },
  },
} satisfies Partial<Meta<IBaseFormControlProps>>;

export const TextBasedControlMeta = {
  ...BaseControlMeta,
  argTypes: {
    ...BaseControlMeta.argTypes,
    placeholder: {
      control: 'text',
      type: 'string',
      description: 'It defines the text displayed in the input when it has no value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    maxlength: {
      control: 'number',
      type: 'number',
      description: 'Defines the maximum string length that the user can enter into the input',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    minlength: {
      control: 'number',
      type: 'number',
      description: 'Defines the minimum string length that the user can enter into the input',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
      description:
        'If "true", makes the input not mutable, meaning the user can not edit the input value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
    datalist: {
      control: 'object',
      type: 'symbol',
      description: 'An optional data-list for input suggestions',
      table: {
        category: 'Reactive Properties',
        type: {
          detail: 'IDatalistConfig',
          summary: '{ list: string, options: { value: string, label: string }[] } | undefined',
        },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    inputmode: {
      control: 'text',
      type: 'string',
      description:
        'Particularly on mobile devices, provides a hint to the browser about the type of virtual keyboard to display when a user interacts with the input.',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The initial value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
  },
  args: {
    ...BaseControlMeta.args,
    placeholder: undefined,
    maxlength: undefined,
    minlength: undefined,
    readonly: false,
    datalist: undefined,
    inputmode: undefined,
    value: undefined,
  },
} satisfies Partial<Meta<ITextBasedControlProps>>;

export const NumberBasedControlMeta = {
  ...BaseControlMeta,
  argTypes: {
    ...BaseControlMeta.argTypes,
    placeholder: {
      control: 'text',
      type: 'string',
      description: 'It defines the text displayed in the input when it has no value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    max: {
      control: 'number',
      type: 'number',
      description: 'It defines the maximum value that is acceptable and valid.',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    min: {
      control: 'number',
      type: 'number',
      description: 'It defines the minimum value that is acceptable and valid.',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    step: {
      control: 'number',
      type: 'number',
      description: 'It defines the increment interval between legal values.',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    datalist: {
      control: 'object',
      type: 'symbol',
      description: 'An optional data-list for input suggestions',
      table: {
        category: 'Reactive Properties',
        type: {
          detail: 'IDatalistConfig',
          summary: '{ list: string, options: { value: string, label: string }[] } | undefined',
        },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
      description:
        'If "true", makes the input not mutable, meaning the user can not edit the input value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
    inputmode: {
      control: 'text',
      type: 'string',
      description:
        'Particularly on mobile devices, provides a hint to the browser about the type of virtual keyboard to display when a user interacts with the input.',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The initial value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
  },
  args: {
    ...BaseControlMeta.args,
    placeholder: undefined,
    max: undefined,
    min: undefined,
    step: undefined,
    datalist: undefined,
    readonly: false,
    inputmode: undefined,
    value: undefined,
  },
} satisfies Partial<Meta<INumberBasedControlProps>>;

export const SelectBasedControlMeta = {
  ...BaseControlMeta,
  argTypes: {
    ...BaseControlMeta.argTypes,
    multiple: {
      control: 'boolean',
      type: 'boolean',
      description: 'Does the select accepts more than one selected option?',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
    size: {
      control: 'number',
      type: 'number',
      description: 'Defines the number of displayed options',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    options: {
      control: 'object',
      type: 'symbol',
      description: 'The selectable options',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'IArtSelectOption' },
        defaultValue: { summary: '[]' },
      },
      required: false,
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The initial value',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
  },
  args: {
    ...BaseControlMeta.args,
    multiple: false,
    size: undefined,
    options: [
      { value: '1', name: 'Option 1' },
      { value: '2', name: 'Option 2' },
      { value: '3', name: 'Option 3' },
      { value: '4', name: 'Option 4' },
      { value: '5', name: 'Option 5' },
    ],
    value: '2',
  },
} satisfies Partial<Meta<ISelectBasedControlProps>>;
