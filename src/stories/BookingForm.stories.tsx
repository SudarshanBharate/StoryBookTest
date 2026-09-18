import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import BookingForm from "../components/BookingForm/BookingForm";

const meta = {
  title: "Components/BookingForm",
  component: BookingForm,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A semantic booking form that collects a guest name, check-in date, and number of guests. Use Storybook Controls to change the title, submit button text, and disabled state.",
      },
    },
  },

  argTypes: {
    title: {
      control: "text",
      description: "The heading shown at the top of the booking form.",
    },

    submitLabel: {
      control: "text",
      description: "The text shown inside the submit button.",
    },

    disabled: {
      control: "boolean",
      description: "Disables the Book now submit button.",
    },

    onSubmit: {
      control: false,
      description:
        "A function called after the form is submitted. Storybook records this in the Actions panel.",
    },
  },
} satisfies Meta<typeof BookingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Book your stay",
    submitLabel: "Book now",
    disabled: false,
    onSubmit: fn(),
  },
};

export const Disabled: Story = {
  args: {
    title: "Book your stay",
    submitLabel: "Book now",
    disabled: true,
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use this state when booking is temporarily unavailable or the user must complete another step first.",
      },
    },
  },
};

export const ReserveRoom: Story = {
  args: {
    title: "Reserve your room",
    submitLabel: "Reserve now",
    disabled: false,
    onSubmit: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "An alternative example showing that the same BookingForm component can have different wording.",
      },
    },
  },
};