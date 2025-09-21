import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/internal/test';
import { BaseButtonMeta } from '../../shared-storybook';
import '../hollow-button';
import type { ArtHollowButton } from '../hollow-button';
import type { IArtHollowButton } from '../types';

const meta: Meta<IArtHollowButton> = {
  ...BaseButtonMeta,
  title: 'Components/Button/Hollow Button',
  component: 'art-hollow-button',
  argTypes: {
    ...BaseButtonMeta.argTypes,
    text: {
      control: 'text',
      type: 'string',
      description: 'The centered text displayed inside the button',
      table: {
        category: 'UI/UX',
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
        category: 'UI/UX',
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
        category: 'UI/UX',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      required: false,
    },
  },
  args: {
    ...BaseButtonMeta.args,
    text: 'Click',
    leftIcon: undefined,
    rightIcon: undefined,
  },
};

export default meta;
type Story = StoryObj<IArtHollowButton>;

const Template = (args: IArtHollowButton) => {
  return html`
    <art-hollow-button
      variant="${args.variant}"
      size="${args.size}"
      text="${args.text}"
      leftIcon="${ifDefined(args.leftIcon)}"
      rightIcon="${ifDefined(args.rightIcon)}"
      ?disabled="${args.disabled}"></art-hollow-button>
  `;
};

export const Default: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('art-hollow-button') as ArtHollowButton;

    if (!component) {
      throw new Error('Component not found');
    }

    await expect(component).toBeDefined();
  },
};
