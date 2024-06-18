import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta = {
    title: "Molecules/Banner",
    component: Banner,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
        ),
        iconId: "",
    },
};

export const Info: Story = {
    args: {
        children: (
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
        ),
        iconId: "info",
        style: {
            backgroundColor: "var(--light-primary)",
            color: "var(--strong-primary)",
        },
    },
};

export const Warning: Story = {
    args: {
        children: (
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
        ),
        extraClassName: "Banner--rounded",
        iconId: "warning",
        style: {
            backgroundColor: "var(--light-primary)",
            color: "var(--strong-primary)",
        },
        size: "large",
    },
};
