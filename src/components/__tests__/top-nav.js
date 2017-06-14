import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from '../top-nav';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should be a nav', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.is('nav')).toEqual(true);
    });


    
});