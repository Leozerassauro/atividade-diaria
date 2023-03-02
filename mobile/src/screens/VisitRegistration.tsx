// Native
import { useState } from 'react'
import { Box, VStack } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { ClientForm } from '@components/ClientForm'
import { StatusForm } from '@components/StatusForm'
import { SizeForm } from '@components/SizeForm'
import { NextActionForm } from '@components/NextActionForm'
import { ValuesForm } from '@components/ValuesForm'
import { DecisionForm } from '@components/DecisionForm'
import { ObservationsForm } from '@components/ObservationsForm'

export function VisitRegistration() {
  const [currentStep, setCurrentStep] = useState(6)
  const steps = [
    <ClientForm />,
    <StatusForm />,
    <SizeForm />,
    <NextActionForm />,
    <ValuesForm />,
    <DecisionForm />,
    <ObservationsForm />,
  ]
  return (
    <VStack flex={1}>
      <ScreenHeader title="registro de visita" />
      <Box flex={1}>{steps[currentStep]}</Box>
    </VStack>
  )
}
