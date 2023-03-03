// Native
import { useMemo, useState } from 'react'
import { Heading, HStack, Skeleton, Icon, Pressable, Box } from 'native-base'
// Assets
import { Entypo } from '@expo/vector-icons'
import { ClientForm } from './ClientForm'
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
    <ClientForm key={1} />,
    <StatusForm key={2} />,
    <SizeForm key={3} />,
    <NextActionForm key={4} />,
    <ValuesForm key={5} />,
    <DecisionForm key={6} />,
    <ObservationsForm key={7} />,
  ])

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
          p={3}
          mb={4}
          bg="gray.600"
          rounded="md"
          overflow="hidden"
          borderColor="gray.400"
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
            <Heading color="gray.200" fontSize="md" textTransform="capitalize">
              {title}
            </Heading>
            <Icon as={Entypo} name={showForm ? 'chevron-up' : 'chevron-down'} />
          </HStack>
          <Box style={{ display: showForm ? 'flex' : 'none' }}>
            {forms[index]}
          </Box>
        </Pressable>
      )}
    </>
  )
}
