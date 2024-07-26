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
		type: "info",
	},
};

export const Success: Story = {
	args: {
		children: (
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		),
		iconId: "info",
		type: "success",
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
		iconId: "warning",
		size: "large",
		type: "warning",
	},
};

export const Danger: Story = {
	args: {
		children: (
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
		),
		iconId: "warning",
		size: "large",
		type: "danger",
	},
};
