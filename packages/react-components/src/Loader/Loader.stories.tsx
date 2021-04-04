import { select } from '@storybook/addon-knobs';

import { Spinner } from './Spinner';

export default { title: 'Loaders' };

export const BasicSpinner = () => <Spinner size={select('size', ['sm', 'md', 'lg'], 'md')} />;
