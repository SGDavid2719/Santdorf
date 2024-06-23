import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
    title: "Atoms/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "",
        style: {
            backgroundColor: "#EFEFEF",
        },
    },
};

export const Rounded: Story = {
    args: {
        children: "",
        extraClassName: "avatar--rounded",
        style: {
            backgroundColor: "#EFEFEF",
        },
    },
};

export const Squared: Story = {
    args: {
        children: "",
        extraClassName: "avatar--squared",
        style: {
            backgroundColor: "#EFEFEF",
        },
    },
};
