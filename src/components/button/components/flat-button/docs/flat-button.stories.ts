import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { expect } from 'storybook/internal/test';
import { BaseButtonMeta } from '../../shared-storybook';
import '../flat-button';
import type { ArtFlatButton } from '../flat-button';
import type { IArtFlatButton } from '../types';

const meta: Meta<IArtFlatButton> = {
  ...BaseButtonMeta,
  title: 'Components/Button/Flat Button',
  component: 'art-flat-button',
  argTypes: {
    ...BaseButtonMeta.argTypes,
    text: {
      control: 'text',
      type: 'string',
      description: 'The text displayed as button',
      table: {
        category: 'UI/UX',
        type: { summary: 'string' },
        defaultValue: { summary: 'Click' },
      },
      required: false,
    },
  },
  args: {
    ...BaseButtonMeta.args,
    text: 'Click',
  },
};

export default meta;
type Story = StoryObj<IArtFlatButton>;

const Template = (args: IArtFlatButton) => {
  return html` <art-flat-button variant="${args.variant}" size="${args.size}" text="${args.text}" ?disabled="${args.disabled}"> </art-flat-button>`;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-flat-button') as ArtFlatButton;

    if (!component) {
      throw new Error('Component not found');
    }

    await expect(component).toBeDefined();
  },
};
