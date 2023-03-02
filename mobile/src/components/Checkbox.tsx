// Native
import {
  Checkbox as NativeBaseCheckbox,
  ICheckboxProps,
  FormControl,
  Text,
  VStack,
} from 'native-base'

// Interfaces
type Props = ICheckboxProps & {
  title: string
}

export function Checkbox({ title, ...props }: Props) {
  return (
    <VStack>
      <FormControl>
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
      </FormControl>
    </VStack>
  )
}
