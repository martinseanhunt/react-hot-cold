import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from '../info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Should have overlay class', () => {
        const wrapper = shallow(<InfoModal />);
        expect(wrapper.hasClass('overlay')).toEqual(true);
    });
});