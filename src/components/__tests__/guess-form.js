import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from '../guess-form';

describe('<Guess />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should be a form', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.is('form')).toEqual(true);
    });


});