import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "../components/Footer/Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],

  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A semantic website footer containing copyright text and navigation links. Use footer links for secondary information such as privacy policies, terms, and contact pages.",
      },
    },
  },

  argTypes: {
    copyright: {
      control: "text",
      description: "The copyright text displayed in the footer.",
    },

    links: {
      control: "object",
      description: "The list of navigation links shown in the footer.",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    copyright: "© 2026 StayEasy. All rights reserved.",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const Minimal: Story = {
  args: {
    copyright: "© 2026 StayEasy",
    links: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A minimal footer containing only copyright information and no navigation links.",
      },
    },
  },
};