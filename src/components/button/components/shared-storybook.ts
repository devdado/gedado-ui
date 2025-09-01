import { variants } from '@/types/core';
import type { Meta } from '@storybook/web-components-vite';
import { buttonSizes, type IBaseArtButton } from './types';

export const BaseButtonMeta: Meta<IBaseArtButton> = {
  argTypes: {
    variant: {
      control: 'select',
      type: 'string',
      options: variants,
      description: 'The button color',
      table: {
        category: 'UI/UX',
        type: { summary: 'Variant' },
        defaultValue: { summary: 'primary' },
      },
      required: false,
    },
    size: {
      control: 'select',
      type: 'string',
      options: buttonSizes,
      description: 'The button size',
      table: {
        category: 'UI/UX',
        type: { summary: 'Size' },
        defaultValue: { summary: 'base' },
      },
      required: false,
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Is the button disabled?',
      table: {
        category: 'UI/UX',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
    disabled: false,
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

/* export const FullButtonMeta: Partial<Meta<IFullButton>> = {
  argTypes: {
    variant: {
      control: 'select',
      type: 'string',
      options: variants,
      description: 'The button color',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'Variant' },
        defaultValue: { summary: 'primary' },
      },
      required: false,
    },
    size: {
      control: 'select',
      type: 'string',
      options: buttonSizes,
      description: 'The button size',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'Size' },
        defaultValue: { summary: 'base' },
      },
      required: false,
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'The centered text displayed inside the button',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'Click' },
      },
      required: false,
    },
    leftIcon: {
      control: 'text',
      type: 'string',
      description: 'The optional left aligned Material Google Symbol',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
    rightIcon: {
      control: 'text',
      type: 'string',
      description: 'The optional right aligned Material Google Symbol',
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
      description: 'Is the button disabled?',
      table: {
        category: 'Reactive Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      required: false,
    },
  },
  args: {
    variant: 'primary',
    size: 'base',
    text: 'Click',
    leftIcon: undefined,
    rightIcon: undefined,
    disabled: false,
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
}; */
