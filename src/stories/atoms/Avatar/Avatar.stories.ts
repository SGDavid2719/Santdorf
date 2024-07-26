import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/100',
    alt: 'Avatar Image',
  },
};

export const SquaredWithStatus: Story = {
  args: {
    src: 'https://via.placeholder.com/100',
    alt: 'Avatar Image',
    isOnline: true,
    form: 'squared',
  },
};

export const LargeWithStatus: Story = {
  args: {
    src: 'https://via.placeholder.com/100',
    alt: 'Avatar Image',
    isOnline: true,
    form: 'rounded',
    size: 'large',
  },
};
