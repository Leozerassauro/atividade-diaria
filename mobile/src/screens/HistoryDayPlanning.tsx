// Native
import { useState } from 'react'
import { FlatList, Heading, SectionList, VStack } from 'native-base'
// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryDayPlanningCard } from '@components/HistoryDayPlanningCard'
import { EmptyList } from '@components/EmptyList'

export function HistoryDayPlanning() {
  const [visits] = useState([
    {
      id: 1,
      clientName: 'Cliente 01',
      location: {
        address: 'Rua teste',
        city: 'Cidade teste',
        state: 'Estado teste',
      },
      date: '22/02/2023',
      period: 'Manhã',
      activity: ['Visita Lead', 'Treinamento'],
      visitType: 'Agendada',
    },
    {
      id: 2,
      clientName: 'Cliente 02 EIRELI',
      location: {
        address: 'Rua teste',
        city: 'Cidade teste',
        state: 'Estado teste',
      },
      date: '22/02/2023',
      period: 'Manhã',
      activity: ['Visita Lead', 'Treinamento'],
      visitType: 'Agendada',
    },
    {
      id: 3,
      clientName: 'Cliente 03 LTDA',
      location: {
        address: 'Rua teste',
        city: 'Cidade teste',
        state: 'Estado teste',
      },
      date: '22/02/2023',
      period: 'Manhã',
      activity: ['Visita Lead', 'Treinamento'],
      visitType: 'Agendada',
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Planejamentos" />
      <FlatList
        data={visits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HistoryDayPlanningCard
            clientName={item.clientName}
            location={item.location}
            date={item.date}
            period={item.period}
            activity={item.activity}
            visitType={item.visitType}
          />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ paddingBottom: 10 }}
        contentContainerStyle={
          visits.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <EmptyList title="Não há cadastros pendentes" />
        )}
        p={8}
      />
    </VStack>
  )
}
