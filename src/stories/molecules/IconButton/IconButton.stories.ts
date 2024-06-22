import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconButton } from "./IconButton";

const meta = {
    title: "Molecules/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconId: "add",
        stroke: "var(--strong-primary)",
    },
};

export const WithText: Story = {
    args: {
        iconId: "add",
        stroke: "var(--strong-primary)",
        text: "Button",
    },
};

export const Primary: Story = {
    args: {
        iconId: "add",
        stroke: "var(--strong-primary)",
        extraClassName: "btn--primary",
    },
};

export const Secondary: Story = {
    args: {
        iconId: "add",
        stroke: "var(--light-secondary)",
        extraClassName: "btn--secondary",
    },
};
