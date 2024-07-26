import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 5,
  },
};

export const Info: Story = {
  args: {
    value: 5,
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    value: 5,
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    value: 5,
    type: 'warning',
  },
};

export const Danger: Story = {
  args: {
    value: 5,
    type: 'danger',
  },
};
