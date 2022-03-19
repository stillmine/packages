import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { OmitProps } from '@stillmine/types';
import { ForwardedRef, forwardRef } from 'react';
import { useToggle } from 'react-use';

import { Field } from './Field';

interface Props extends OmitProps<typeof Field, 'children'>, OmitProps<typeof Input, 'type'> {}

export const PasswordInput = forwardRef(function PasswordInput(
  { error, errorMessage, label, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [passwordVisible, togglePassword] = useToggle(false);

  return (
    <Field error={error} errorMessage={errorMessage} label={label}>
      <InputGroup>
        <Input ref={ref} type={passwordVisible ? 'text' : 'password'} {...props} />
        <InputRightElement width="52px">
          <Button size="sm" type="button" onClick={togglePassword}>
            {passwordVisible ? '숨기기' : '보기'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Field>
  );
});
