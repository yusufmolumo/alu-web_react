import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should render the header', () => {
        const wrapper =shallow (<App />);
        expect(wrapper.find('.App-header').exists()).toHaveLength(1);
    });

    it('App renders a div with the class App-body', () =>{
        const wrapper = shallow(<App/>);
        expexct(wrapper.find('.App-body').exists()).toHaveLength(1);
    });

    it('App renders a div with class App-footer', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('.App-footer').exists()).toHaveLength(1);
    })
});