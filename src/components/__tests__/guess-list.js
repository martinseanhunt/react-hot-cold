import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from '../guess-list';

describe('<Guess />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[1,2,3]}/>);
    });

    it('Should be an UL', () => {
        const wrapper = shallow(<GuessList guesses={[1,2,3]}/>);
        expect(wrapper.is('ul')).toEqual(true);
    });

    it('Should have the expected length', () => {
        const wrapper = shallow(<GuessList guesses={[1,2,3]}/>);
        expect(wrapper.children().length).toEqual(3);
    });


});