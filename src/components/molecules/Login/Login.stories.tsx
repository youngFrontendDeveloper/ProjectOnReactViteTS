import { Meta, StoryFn } from "@storybook/react";
import Login, { LoginProps } from "./Login";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Molecules/Login",
  component: Login,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  windowWidth: 1024,
};

export const SmallScreen = Template.bind({});
SmallScreen.args = {
  windowWidth: 500,
};
