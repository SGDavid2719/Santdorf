import type { Meta, StoryObj } from "@storybook/react";
import { LabelInput } from "./LabelInput";

const meta = {
    title: "Molecules/LabelInput",
    component: LabelInput,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "LabelInput",
        htmlFor: "test",
        name: "test",
    },
};
