import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Article} from '../article/Article';
import _ from 'lodash';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Article text="hello" onCheck={_.noop}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
