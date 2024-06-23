import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
    title: "Atoms/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 5,
        style: {
            backgroundColor: "#EFEFEF",
            color: "black",
        },
    },
};

export const Primary: Story = {
    args: {
        value: 5,
        extraClassName: "primary",
    },
};

export const Secondary: Story = {
    args: {
        value: 5,
        extraClassName: "secondary",
    },
};
