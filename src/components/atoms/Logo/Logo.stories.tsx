import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./Logo";

export default {
  title: "Atoms/ Logo",
  component: Logo,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <Logo />;

export const Default = Template.bind({});
