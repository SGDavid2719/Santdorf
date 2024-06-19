import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta = {
    title: "Atoms/Loading",
    component: Loading,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isLoading: true,
        loadingText: "Loading...",
    },
};
