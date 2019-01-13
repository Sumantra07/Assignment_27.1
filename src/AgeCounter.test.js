// Unit Test file for Component AgeCounter
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {mount, shallow} from 'enzyme'
import AgeCounter from './AgeCounter';

describe('Age Counter Test Cases', () => {

    let counter = null;

    beforeEach(() => {
        counter = new AgeCounter();
    });

    it('Initializes with a Zero', () => {
        expect(counter.state.age).toBe(0);
    });

    it('Increments Properly', () => {
        const wrapper = shallow(<AgeCounter/>);
        expect(wrapper.state('age')).toBe(0);
        wrapper.find('#increment').simulate('click');
        expect(wrapper.state('age')).toBe(1);
    });
    it('Decrements Properly', () => {
        const wrapper = shallow(<AgeCounter/>);
        expect(wrapper.state('age')).toBe(0);
        wrapper.find('#increment').simulate('click');
        wrapper.find('#decrement').simulate('click');
        expect(wrapper.state('age')).toBe(0);
    });
    it('Decrements till zero', () => {
        const wrapper = shallow(<AgeCounter/>);
        expect(wrapper.state('age')).toBe(0);
        wrapper.find('#decrement').simulate('click');
        expect(wrapper.state('age')).toBe(0);
    });
});