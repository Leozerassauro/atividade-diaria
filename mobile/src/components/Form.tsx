// Native
import { useMemo, useState } from 'react'
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
}

export function Form({ title, index }: Props) {
  const isLoading = useMemo(() => false, [])
  const [showForm, setShowForm] = useState(false)
  const [forms] = useState([
    <ClientForm onIsCompletelyFilled={handleIsFilledChange} key={1} />,
    <StatusForm key={2} />,
    <ServicedByForm key={3} />,
    <DecisionForm key={4} />,
    <SizeForm key={5} />,
    <NextActionForm key={6} />,
    <ValuesForm key={7} />,
    <ObservationsForm key={8} />,
  ])
  const [isFilled, setIsFilled] = useState(false)

  function handleIsFilledChange(value: boolean) {
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
        <Pressable
          px={6}
          py={4}
          mb={4}
          bg="gray.600"
          rounded="md"
          overflow="hidden"
          borderColor={isFilled ? 'green.700' : 'gray.400'}
          borderWidth={1}
          _pressed={{
            borderColor: 'green.500',
            borderWidth: 1,
          }}
          onPress={() => handleToggleCard(index)}
        >
          <HStack
            flex={1}
            justifyContent="space-between"
            alignItems="center"
            mb={showForm ? 6 : 0}
          >
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
          <Box style={{ display: showForm ? 'flex' : 'none' }}>
            {forms[index]}
          </Box>
        </Pressable>
      )}
    </>
  )
}
