import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/internal/actions';
import { expect } from 'storybook/internal/test';
import '../textarea';
import type { ArtTextarea } from '../textarea';
import type { IArtTextarea } from '../types';

const meta: Meta<IArtTextarea> = {
  title: 'Components/Textarea',
  component: 'art-textarea',
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
    cols: {
      control: 'number',
      description: 'The visible width of the text control, in average character widths.',
      table: {
        category: 'UI/UX',
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
      },
    },
    rows: {
      control: 'number',
      description: 'The number of visible text lines for the control.',
      table: {
        category: 'UI/UX',
        type: { summary: 'number' },
        defaultValue: { summary: '2' },
      },
    },
    wrap: {
      control: 'text',
      description: 'Indicates how the control should wrap the value for form submission.',
      table: {
        category: 'UI/UX',
        type: { summary: '"soft" | "hard"' },
        defaultValue: { summary: 'soft' },
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
    readonly: {
      control: 'boolean',
      description: 'If "true", the input is inmutable',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autogrow: {
      control: 'boolean',
      description: 'If "true", the textarea cols will fit content',
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
    cols: 20,
    rows: 2,
    wrap: 'soft',
    value: '',
    minlength: 0,
    maxlength: 524288,
    required: false,
    disabled: false,
    readonly: false,
    autogrow: false,
  },
  parameters: {
    actions: {
      handles: ['update'],
    },
  },
};

export default meta;
type Story = StoryObj<IArtTextarea>;

const Template = (args: IArtTextarea) => {
  return html`
    <div class="w-[250px]">
      <art-textarea
        id="${args.name}"
        name="${args.name}"
        label="${ifDefined(args.label)}"
        placeholder="${ifDefined(args.placeholder)}"
        value="${args.value}"
        cols="${args.cols}"
        rows="${args.rows}"
        wrap="${args.wrap}"
        minlength="${args.minlength}"
        maxlength="${args.maxlength}"
        ?required="${args.required}"
        ?readonly="${args.readonly}"
        ?disabled="${args.disabled}"
        ?autogrow="${args.autogrow}"
        @update="${action('update')}">
      </art-textarea>
    </div>
  `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-textarea') as ArtTextarea;

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
    placeholder: 'Write an comment',
  },
};

export const Invalid: Story = {
  render: Template,
  args: {
    label: 'Invalid Comment',
    placeholder: 'Write an comment with more that 10 characters',
    value: 'invalid comment',
    minlength: 20,
    required: true,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'Disabled',
    value: 'comment',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  render: Template,
  name: 'Read Only',
  args: {
    label: 'Read Only',
    value: 'Comment',
    readonly: true,
  },
};

export const Autogrow: Story = {
  render: Template,
  args: {
    label: 'Autogrow',
    value: 'Add more lines to this comment',
    placeholder: 'Write a multiline comment',
    autogrow: true,
  },
};
