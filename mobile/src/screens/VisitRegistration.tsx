// Native
// import { useState } from 'react'
import { View } from 'react-native'
import { Box, Center, ScrollView, Text, VStack } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { Form } from '@components/Form'
import { Button } from '@components/Button'
import { useState } from 'react'
import { Location } from '@components/Location'

export function VisitRegistration() {
  const formsTitle = [
    'Cliente',
    'Segmento do cliente',
    'Status',
    'Atendido por quem',
    'Tomada de decisão',
    'Tamanho',
    'Próxima Ação',
    'Percepção de valores',
    'observações gerais',
  ]
  const [completedForms, setCompletedForms] = useState(0)

  function handleFormComplete(isComplete: boolean) {
    if (isComplete) {
      setCompletedForms(completedForms + 1)
    } else {
      setCompletedForms(completedForms - 1)
    }
    console.log(isComplete)
  }
  return (
    <Box>
      <ScreenHeader title="Histórico de Visitas" />
      <Box w="full" h={1} bg="gray.400">
        <View
          style={{
            backgroundColor: '#008943',
            width: '28%',
          }}
        >
          <Text color="gray.100">{completedForms}</Text>
        </View>
      </Box>
      <Center my={3}>
        <Location />
      </Center>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack p={8} mb={48}>
          {formsTitle.map((title, index) => (
            <Form
              key={index}
              title={title}
              index={index}
              onFormComplete={() => handleFormComplete}
            />
          ))}
          <Button title="Salvar" />
        </VStack>
      </ScrollView>
    </Box>
  )
}
