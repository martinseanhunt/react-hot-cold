import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from '../guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection feedback='testing it up'/>);
    });

    it('Should be a section', () => {
        const wrapper = shallow(<GuessSection feedback='testing it up'/>);
        expect(wrapper.is('section')).toEqual(true);
    });

    it('Should have the expected message', () => {
        const wrapper = shallow(<GuessSection feedback='testing it up'/>);
        expect(wrapper.find('h2').text()).toEqual('testing it up');
    });

});