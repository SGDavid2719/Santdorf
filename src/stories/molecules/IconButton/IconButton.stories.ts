import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from './IconButton';

const meta = {
  title: 'Molecules/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconId: 'add',
  },
};

export const WithText: Story = {
  args: {
    iconId: 'add',
    text: 'Button',
  },
};

export const Primary: Story = {
  args: {
    iconId: 'add',
    btnType: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    iconId: 'add',
    btnType: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    iconId: 'add',
    btnType: 'danger',
  },
};

export const Warning: Story = {
  args: {
    iconId: 'add',
    btnType: 'warning',
  },
};
