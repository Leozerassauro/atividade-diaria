// Native
import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="gray.100"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.600',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  )
}
