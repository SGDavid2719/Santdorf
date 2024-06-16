import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Button",
    },
};

export const Primary: Story = {
    args: {
        label: "Primary Button",
        extraClassName: "btn--primary",
    },
};

export const Secondary: Story = {
    args: {
        label: "Secondary Button",
        extraClassName: "btn--secondary",
    },
};
