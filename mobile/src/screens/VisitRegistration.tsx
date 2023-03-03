// Native
// import { useState } from 'react'
import { Box, ScrollView, VStack } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { Form } from '@components/Form'
import { Button } from '@components/Button'

export function VisitRegistration() {
  const formsTitle = [
    'Cliente',
    'Status',
    'Tamanho',
    'Próxima Ação',
    'Percepção de valores',
    'Tomada de decisão',
    'observações gerais',
  ]
  return (
    <Box>
      <ScreenHeader title="Histórico de Visitas" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack p={8} mb={24}>
          {formsTitle.map((title, index) => (
            <Form key={index} title={title} index={index} />
          ))}
          <Button title="Salvar" />
        </VStack>
      </ScrollView>
    </Box>
  )
}
