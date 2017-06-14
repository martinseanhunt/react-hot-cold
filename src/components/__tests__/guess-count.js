import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from '../guess-count';

describe('<Guess />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount count="33" />);
    });
});


