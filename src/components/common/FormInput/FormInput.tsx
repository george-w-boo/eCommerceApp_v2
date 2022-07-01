import { FC, InputHTMLAttributes } from 'react';
import {
  FormInputLabel,
  Input,
  Group
} from  './FormInput.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          htmlFor={otherProps.name}
          shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}
        >{label}</FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput;