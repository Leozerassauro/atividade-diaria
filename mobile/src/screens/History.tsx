// Native
import { useState } from 'react'
import { VStack, SectionList, Heading } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'
import { EmptyList } from '@components/EmptyList'

export function History() {
  const [visits] = useState([
    {
      title: '24/02/2023',
      data: [
        {
          id: 1,
          location: {
            address: 'Rua teste',
            city: 'Cidade teste',
            state: 'Estado teste',
          },
          clientName: 'Cliente 01',
          status: 'Cliente',
          size: '1000',
          nextAction: ['Revisitar', 'Enviar Info Com/Tec'],
          values: {
            service: 3,
            price: 2,
            quality: 4,
            relationship: 2,
          },
          decision: {
            responsible: 'Responsável teste',
            jobRole: 'Cargo teste',
            email: 'email teste',
            phone: '54 99999999',
          },
          observation: ['Enviar amostras', 'Frete grátis sempre'],
        },
        {
          id: 2,
          location: {
            address: 'Rua teste',
            city: 'Cidade teste',
            state: 'Estado teste',
          },
          clientName: 'Cliente 02',
          status: 'Não cliente',
          size: '550',
          nextAction: ['Cotar', 'Enviar amostras'],
          values: {
            service: 5,
            price: 4,
            quality: 4,
            relationship: 5,
          },
          decision: {
            responsible: 'Responsável teste',
            jobRole: 'Cargo teste',
            email: 'email teste',
            phone: '54 99999999',
          },
          observation: ['Enviar amostras', 'Frete grátis sempre'],
        },
      ],
    },

    {
      title: '22/02/2023',
      data: [
        {
          id: 1,
          location: {
            address: 'Rua teste',
            city: 'Cidade teste',
            state: 'Estado teste',
          },
          clientName: 'Cliente 03',
          status: 'Cliente',
          size: '1000',
          nextAction: ['Revisitar', 'Enviar Info Com/Tec'],
          values: {
            service: 3,
            price: 2,
            quality: 4,
            relationship: 2,
          },
          decision: {
            responsible: 'Responsável teste',
            jobRole: 'Cargo teste',
            email: 'email teste',
            phone: '54 99999999',
          },
          observation: ['Enviar amostras', 'Frete grátis sempre'],
        },
      ],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Visitas" />

      <SectionList
        sections={visits}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <HistoryCard
            clientName={item.clientName}
            location={item.location}
            status={item.status}
            size={item.size}
            nextAction={item.nextAction}
            values={item.values}
            decision={item.decision}
            observation={item.observation}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          visits.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <EmptyList title="Não há visitas registradas." />
        )}
      />
    </VStack>
  )
}
