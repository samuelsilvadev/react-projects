import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './../../src/components/loader';

storiesOf('Loader', module)
    .add('default', () => {
        return <Loader />;
    });