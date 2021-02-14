import { Children, cloneElement, ReactElement, useState } from 'react';

import { TabItem } from './TabItem';

interface Props {
  children: ReactElement[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const Tab = ({ children, defaultValue, onChange, ...props }: Props) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div role="tablist" {...props}>
      {Children.map(children, child => {
        return cloneElement(child, {
          active: value === child.props.value,
          onClick({ currentTarget: { value } }) {
            onChange?.(value);
            setValue(value);
          },
        });
      })}
    </div>
  );
};

Tab.Item = TabItem;
