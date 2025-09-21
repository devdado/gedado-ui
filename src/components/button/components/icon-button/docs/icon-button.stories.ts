import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { expect } from 'storybook/internal/test';
import { BaseButtonMeta } from '../../shared-storybook';
import '../icon-button';
import type { ArtIconButton } from '../icon-button';
import type { IArtIconButton } from '../types';

const meta: Meta<IArtIconButton> = {
  ...BaseButtonMeta,
  title: 'Components/Button/Icon Button',
  component: 'art-icon-button',
  argTypes: {
    ...BaseButtonMeta.argTypes,
    icon: {
      control: 'text',
      type: 'string',
      description: 'The Material Google Symbol displayed in the button',
      table: {
        category: 'UI/UX',
        type: { summary: 'string' },
        defaultValue: { summary: 'home' },
      },
      required: false,
    },
  },
  args: {
    ...BaseButtonMeta.args,
    icon: 'home',
  },
};

export default meta;
type Story = StoryObj<IArtIconButton>;

const Template = (args: IArtIconButton) => {
  return html` <art-icon-button variant="${args.variant}" size="${args.size}" icon="${args.icon}" ?disabled="${args.disabled}"></art-icon-button> `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-icon-button') as ArtIconButton;

    if (!component) {
      throw new Error('Component not found');
    }

    await expect(component).toBeDefined();
  },
};
