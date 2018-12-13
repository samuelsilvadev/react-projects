import { configure } from '@storybook/react';

import './../src/index.css';

function loadStories() {
  require('./stories');
}

configure(loadStories, module);
