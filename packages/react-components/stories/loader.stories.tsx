import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import { Spinner } from '../src/spinner';

export default { title: 'Loaders' };

export const BasicSpinner = () => <Spinner size={select('size', ['sm', 'md', 'lg'], 'md')} />;
