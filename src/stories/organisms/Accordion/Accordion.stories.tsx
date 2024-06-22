import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
    title: "Organism/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <p>Content</p>,
        showingLabel: "Show",
        hidingLabel: "Hide",
    },
};
