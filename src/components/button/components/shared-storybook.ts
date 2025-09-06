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
