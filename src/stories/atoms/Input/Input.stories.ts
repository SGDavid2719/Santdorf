import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
    title: "Atoms/Input",
    component: Input,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "test",
        placeholder: "test",
    },
};

export const Checkbox: Story = {
    args: {
        name: "test",
        placeholder: "test",
        type: "checkbox",
    },
};
