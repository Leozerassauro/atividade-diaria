// Native
import {
  Checkbox as NativeBaseCheckbox,
  ICheckboxProps,
  FormControl,
  Text,
} from 'native-base'

// Interfaces
type Props = ICheckboxProps & {
  title: string
  errorMessage?: string | null
}

export function Checkbox({
  errorMessage = null,
  isInvalid,
  title,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseCheckbox
        isChecked={props.isChecked}
        colorScheme="green"
        bg="gray.700"
        size="md"
        onChange={props.onChange}
        {...props}
      >
        <Text color="gray.200" fontSize="md">
          {title}
        </Text>
      </NativeBaseCheckbox>
      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
