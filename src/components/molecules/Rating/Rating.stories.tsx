import { Meta, StoryFn } from "@storybook/react";
import Rating from "./Rating";

export default {
  title: "Molecules/Rating",
  component: Rating,
  argTypes: {
    rating: {
      control: {
        type: "number",
        min: 0,
        max: 5,
        step: 0.1,
      },
      description: "The rating value displayed as stars (from 0 to 5)",
    },
  },
} as Meta;

const Template: StoryFn<{ rating: number }> = (args) => <Rating {...args} />;

export const Default = Template.bind({});

Default.args = {
  rating: 3.2,
};

export const FullRating = Template.bind({});

FullRating.args = {
  rating: 5,
};

export const NoRating = Template.bind({});

NoRating.args = {
  rating: 0,
};
