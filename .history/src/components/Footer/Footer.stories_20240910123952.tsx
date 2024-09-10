import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Components/Header',
  component: Footer,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
