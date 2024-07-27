import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

const meta = {
  title: 'Pages/Example',
  component: Example,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  args: {},
};
