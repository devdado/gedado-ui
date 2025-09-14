import { artSizes, artVariants } from '@/types/core';
import type { Meta } from '@storybook/web-components-vite';
import { type IBaseArtButton } from './types';

export const BaseButtonMeta: Meta<IBaseArtButton> = {
  argTypes: {
    variant: {
      control: 'select',
      type: 'string',
      options: artVariants,
      description: 'The button color',
      table: {
        category: 'UI/UX',
        type: { summary: 'ArtVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: artSizes,
      description: 'The button size',
      table: {
        category: 'UI/UX',
        type: { summary: 'ArtSize' },
        defaultValue: { summary: 'md' },
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
    size: 'md',
    disabled: false,
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};
