import {Meta, StoryFn} from '@storybook/react';
import Login, {LoginProps} from './Login';
import {BrowserRouter} from 'react-router-dom';

export default {
    title: 'Molecules/Login',
    component: Login,
    decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>], 
} as Meta;

const Template: StoryFn<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
    user: {name: 'Johnson Smith'},
    windowWidth: 1024, // Ширина экрана по умолчанию — полное имя
};

export const SmallScreen = Template.bind({});
SmallScreen.args = {
    user: {name: 'Johnson Smith'},
    windowWidth: 500, // Маленький экран — только первая буква
};

export const NoUser = Template.bind({});
NoUser.args = {
    user: null, // Сценарий, когда пользователь не авторизован
};


