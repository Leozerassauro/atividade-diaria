// Native
import { useEffect, useMemo, useState } from 'react'
import { Heading, HStack, Skeleton, Icon, Pressable, Box } from 'native-base'
// Assets
import { Entypo } from '@expo/vector-icons'
// Components
import { ClientForm } from './ClientForm'
import { ServicedByForm } from './ServicedByForm'
import { StatusForm } from './StatusForm'
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
    <StatusForm key={2} />,
    <ServicedByForm onIsCompletelyFilled={handleIsCompletelyFilled} key={3} />,
    <DecisionForm onIsCompletelyFilled={handleIsCompletelyFilled} key={4} />,
    <SizeForm onIsCompletelyFilled={handleIsCompletelyFilled} key={5} />,
    <NextActionForm key={6} />,
    <ValuesForm onIsCompletelyFilled={handleIsCompletelyFilled} key={7} />,
    <ObservationsForm
      onIsCompletelyFilled={handleIsCompletelyFilled}
      key={8}
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
          h={20}
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
            style={{
              display: showForm ? 'flex' : 'none',
            }}
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
        </>
      )}
    </>
  )
}
