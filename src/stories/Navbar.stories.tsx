import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "../components/Navbar/Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A semantic navigation bar. Use links for navigation to pages or sections of a website.",
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: "Sudarshan Residency",
    links: [
      { label: "Home", href: "/" },
      { label: "Rooms", href: "/rooms" },
      { label: "Offers", href: "/offers" },
      { label: "Contact", href: "/contact" },
    ],
  },
};