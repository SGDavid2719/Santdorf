import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tooltip',
    content: 'Content',
  },
};

export const ShowingOnInit: Story = {
  args: {
    children: 'Tooltip',
    content: 'Content',
    initialState: true,
  },
};

export const OnClick: Story = {
  args: {
    children: 'Tooltip',
    content: 'Content',
    actionOnClick: true,
  },
};
