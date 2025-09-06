import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../radio-group';
import { ArtRadioGroup } from '../radio-group';
import { type IArtRadioGroup, radioGroupLayouts } from '../types';

const meta: Meta<IArtRadioGroup> = {
  title: 'Components/Radio Group',
  argTypes: {
    name: {
      control: 'text',
      description: 'The shared name for all radio buttons',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
        defaultValue: { summary: 'radio-<random-uid>' },
      },
    },
    legend: {
      control: 'text',
      description: 'The displayed name for the <fieldset> grouping all radio buttons',
      table: {
        category: 'UI/UX',
        type: { summary: 'string' },
        defaultValue: { summary: 'Radio Group' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If "true", the radio buttons are inmutable and not clickable',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: 'text',
      description: 'Use this to set an initial value.',
      table: {
        category: 'Validation',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    layout: {
      control: 'select',
      type: 'string',
      options: radioGroupLayouts,
      description: 'The layout of the radio buttons',
      table: {
        category: 'UI/UX',
        type: { summary: 'RadioGroupLayout' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    radioButtons: {
      control: 'object',
      type: 'symbol',
      description: 'The metadata of the displayed radio buttons',
      table: {
        category: 'Reactive',
        type: { summary: 'IArtRadioButton[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {
    name: 'radio-165455f4-3c7d-4afe-b520-ad8ef6c124f7',
    legend: 'Radio Group',
    disabled: false,
    value: undefined,
    layout: 'horizontal',
    radioButtons: [
      { id: 'demo-1', value: '1', label: 'Primary' },
      { id: 'demo-2', value: '2', label: 'Auxiliary' },
      { id: 'demo-3', value: '3', label: 'Success' },
      { id: 'demo-4', value: '4', label: 'Warning' },
      { id: 'demo-5', value: '5', label: 'Error' },
    ],
  },
};

export default meta;
type Story = StoryObj<IArtRadioGroup>;

const Template = (args: IArtRadioGroup) => {
  const radioGroup = new ArtRadioGroup();
  radioGroup.name = args.name;
  radioGroup.legend = args.legend;
  radioGroup.layout = args.layout;
  radioGroup.disabled = args.disabled;
  radioGroup.value = args.value;
  radioGroup.radioButtons = args.radioButtons;

  return radioGroup;
};

export const Default: Story = {
  render: Template,
};

export const Layout: Story = {
  render: Template,
  args: {
    layout: 'vertical',
  },
};

export const Variant: Story = {
  render: Template,
  args: {
    radioButtons: [
      { id: 'demo-1', value: '1', label: 'Primary', variant: 'primary' },
      { id: 'demo-2', value: '2', label: 'Auxiliary', variant: 'primary' },
      { id: 'demo-3', value: '3', label: 'Success', variant: 'primary' },
      { id: 'demo-4', value: '4', label: 'Warning', variant: 'primary' },
      { id: 'demo-5', value: '5', label: 'Error', variant: 'primary' },
    ],
  },
};

export const Mixed: Story = {
  render: Template,
  name: 'Mixed Variants',
  args: {
    radioButtons: [
      { id: 'demo-1', value: '1', label: 'Primary', variant: 'primary' },
      { id: 'demo-2', value: '2', label: 'Auxiliary', variant: 'auxiliary' },
      { id: 'demo-3', value: '3', label: 'Success', variant: 'success' },
      { id: 'demo-4', value: '4', label: 'Warning', variant: 'warning' },
      { id: 'demo-5', value: '5', label: 'Error', variant: 'error' },
    ],
  },
};
