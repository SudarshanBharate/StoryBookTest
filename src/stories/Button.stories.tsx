import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";
import { fn } from "storybook/test";



const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A simple reusable button for triggering user actions. Use a real button element for actions such as booking, saving, cancelling, or deleting.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
};

export const Save: Story = {
  args: {
    children: "Save",
  },
};

export const Cancel: Story = {
  args: {
    children: "Cancel",
  },
};

export const Delete: Story = {
  args: {
    children: "Delete",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const BookNow: Story = {
  args: {
    children: "Book now",
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use this button to begin a booking flow, such as booking an appointment, room, ticket, or service.",
      },
    },
  },
};