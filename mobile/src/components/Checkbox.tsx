// Native
import {
  Checkbox as NativeBaseCheckbox,
  ICheckboxProps,
  Text,
  VStack,
} from 'native-base'

type Props = ICheckboxProps & {
  title: string
}

export function Checkbox({ title, ...rest }: Props) {
  return (
    <VStack>
      <NativeBaseCheckbox colorScheme="green" bg="gray.700" size="md" {...rest}>
        <Text color="gray.200" fontSize="md">
          {title}
        </Text>
      </NativeBaseCheckbox>
    </VStack>
  )
}
