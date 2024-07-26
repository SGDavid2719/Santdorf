import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    btnType: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    btnType: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    btnType: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    btnType: 'warning',
  },
};
