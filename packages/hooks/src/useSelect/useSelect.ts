import { ChangeEvent, useCallback, useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  defaultValue?: string;
  initialOptions?: Option[];
}

export function useSelect({ defaultValue, initialOptions = [] }: Props) {
  const [value, setValue] = useState(defaultValue);
  const [options] = useState(initialOptions);

  const onChange = useCallback(({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setValue(value);
  }, []);

  return { options, value, onChange };
}
