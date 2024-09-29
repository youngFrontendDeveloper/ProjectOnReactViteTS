import { Meta, StoryFn } from "@storybook/react";
import Title from "./Title";

export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    extensionClass: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ title: string; extensionClass: string }> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "My cart",
  extensionClass: "",
};
