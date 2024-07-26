import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import { Button } from '../../atoms/Button/Button';

const meta = {
  title: 'Organisms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body: <p>Body</p>,
    setShow: () => {},
    show: false,
    title: 'Title',
  },
  render: function Render(args) {
    const [show, setShow] = useState(false);

    const handleSetShow = () => setShow((prevState) => !prevState);

    return (
      <Modal
        {...args}
        show={show}
        setShow={handleSetShow}
        trigger={
          <Button onClick={handleSetShow} btnType="primary">
            Trigger
          </Button>
        }
      />
    );
  },
};
