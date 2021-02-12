import { renderHook } from '@testing-library/react-hooks';

import { useSelect } from './useSelect';

const initialOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
];

describe('useSelect', () => {
  it('', () => {
    const { result } = renderHook(() => useSelect({ initialOptions }));

    expect(result.current[0]).toStrictEqual(initialOptions);
  });
});
