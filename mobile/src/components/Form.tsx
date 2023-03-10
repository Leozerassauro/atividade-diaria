// Native
import { useMemo, useState } from 'react'
import { Heading, HStack, Skeleton, Icon, Pressable, Box } from 'native-base'
// Assets
import { Entypo } from '@expo/vector-icons'
// Components
import { ClientForm } from './ClientForm'
import { ClientSegmentForm } from './ClientSegmentForm'
import { StatusForm } from './StatusForm'
import { ServicedByForm } from './ServicedByForm'
import { SizeForm } from './SizeForm'
import { NextActionForm } from './NextActionForm'
import { ValuesForm } from './ValuesForm'
import { DecisionForm } from './DecisionForm'
import { ObservationsForm } from './ObservationsForm'

// Interfaces
type Props = {
  title: string
  index: number
  onFormComplete?: () => void
}

export function Form({ title, index, onFormComplete }: Props) {
  const isLoading = useMemo(() => false, [])
  const [showForm, setShowForm] = useState(false)
  const [forms] = useState([
    <ClientForm onIsCompletelyFilled={handleIsCompletelyFilled} key={1} />,
    <ClientSegmentForm
      onIsCompletelyFilled={handleIsCompletelyFilled}
      key={2}
    />,
    <StatusForm onIsCompletelyFilled={handleIsCompletelyFilled} key={3} />,
    <ServicedByForm onIsCompletelyFilled={handleIsCompletelyFilled} key={4} />,
    <DecisionForm onIsCompletelyFilled={handleIsCompletelyFilled} key={5} />,
    <SizeForm onIsCompletelyFilled={handleIsCompletelyFilled} key={6} />,
    <NextActionForm onIsCompletelyFilled={handleIsCompletelyFilled} key={7} />,
    <ValuesForm onIsCompletelyFilled={handleIsCompletelyFilled} key={8} />,
    <ObservationsForm
      onIsCompletelyFilled={handleIsCompletelyFilled}
      key={9}
    />,
  ])
  const [isFilled, setIsFilled] = useState(false)

  function handleIsCompletelyFilled(value: boolean) {
    setIsFilled(value)
  }

  const handleToggleCard = (formIndex: number) => {
    setShowForm(formIndex === index ? !showForm : showForm)
  }

  return (
    <>
      {isLoading ? (
        <Skeleton
          h={12}
          rounded="md"
          startColor="gray.600"
          endColor="gray.400"
          mb={3}
        />
      ) : (
        <>
          <Pressable
            px={6}
            py={4}
            mb={showForm ? 0 : 4}
            bg="gray.600"
            borderWidth={1}
            borderColor={isFilled ? 'green.700' : 'gray.400'}
            borderBottomWidth={showForm ? 0 : 1}
            rounded="md"
            borderBottomLeftRadius={showForm ? 0 : 'md'}
            borderBottomRightRadius={showForm ? 0 : 'md'}
            overflow="hidden"
            _pressed={{
              borderColor: 'green.500',
              borderWidth: 1,
            }}
            onPress={() => handleToggleCard(index)}
          >
            <HStack flex={1} justifyContent="space-between" alignItems="center">
              <Heading
                color={isFilled ? 'gray.300' : 'gray.200'}
                fontSize="md"
                textTransform="capitalize"
              >
                {title}
              </Heading>
              {isFilled ? (
                <Icon as={Entypo} name="check" color="green.700" />
              ) : (
                <Icon
                  as={Entypo}
                  name={showForm ? 'chevron-up' : 'chevron-down'}
                />
              )}
            </HStack>
          </Pressable>

          <Box
            display={showForm ? 'flex' : 'none'}
            bg="gray.600"
            color="gray.600"
            _text={{
              color: 'gray.600',
            }}
            borderColor="gray.600"
          >
            <Box
              rounded="md"
              borderWidth={1}
              borderTopLeftRadius={showForm ? 0 : 'md'}
              borderTopRightRadius={showForm ? 0 : 'md'}
              borderColor={isFilled ? 'green.700' : 'gray.400'}
              borderTopWidth={showForm ? 0 : 1}
              bg="gray.600"
              p={6}
              mb={4}
            >
              {forms[index]}
            </Box>
          </Box>
        </>
      )}
    </>
  )
}
