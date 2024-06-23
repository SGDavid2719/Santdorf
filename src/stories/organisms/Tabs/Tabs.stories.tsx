import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
    title: "Organisms/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
        docs: {
            toc: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: [
            { title: "First", id: 0 },
            { title: "Second", id: 1 },
        ],
        children: <></>,
    },
    render: function Render(args) {
        return (
            <Tabs {...args}>
                <p>First</p>
                <p>Second</p>
            </Tabs>
        );
    },
};
