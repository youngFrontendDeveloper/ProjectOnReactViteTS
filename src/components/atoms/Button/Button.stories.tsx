import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    extensionClass: { control: "text" },
    fn: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<{ text: string; extensionClass?: string; fn?: () => void }> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: "Click me",
  extensionClass: "",
};
