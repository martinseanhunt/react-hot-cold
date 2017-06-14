import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from '../header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Should render the modal when state is set to', () => {
        const wrapper = mount(<Header />);
        wrapper.instance().toggleInfoModal();
        expect(wrapper.find('.overlay').length).toEqual(1);
    });
});