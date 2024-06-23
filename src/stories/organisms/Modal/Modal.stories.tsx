import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
    title: "Organisms/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        body: <p>Body</p>,
        setShow: () => {},
        show: true,
        title: "Title",
    },
};
