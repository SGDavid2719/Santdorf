import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
	title: "Organisms/Accordion",
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

const style = {
	backgroundColor: "white",
	padding: "0.25em",
	marginTop: "0.15em",
};

export const Default: Story = {
	args: {
		children: <p style={style}>Content</p>,
		showingLabel: "Show",
		hidingLabel: "Hide",
	},
};

export const Primary: Story = {
	args: {
		children: <p style={style}>Content</p>,
		showingLabel: "Show",
		hidingLabel: "Hide",
		btnType: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: <p style={style}>Content</p>,
		showingLabel: "Show",
		hidingLabel: "Hide",
		btnType: "secondary",
	},
};

export const Warning: Story = {
	args: {
		children: <p style={style}>Content</p>,
		showingLabel: "Show",
		hidingLabel: "Hide",
		btnType: "warning",
	},
};

export const Danger: Story = {
	args: {
		children: <p style={style}>Content</p>,
		showingLabel: "Show",
		hidingLabel: "Hide",
		btnType: "danger",
	},
};
