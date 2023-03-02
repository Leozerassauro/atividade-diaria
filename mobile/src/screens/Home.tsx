// Native
import { useState } from 'react'
import { FlatList, Heading, HStack, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
// Components
import { HomeHeader } from '@components/HomeHeader'
import { EmptyList } from '@components/EmptyList'
import { PendencyCard } from '@components/PendencyCard'
import { NavButton } from '@components/NavButton'
// Routes
import { AppNavigatorRoutesProps } from '@routes/app.routes'

export function Home() {
  const [pendencies] = useState([
    { id: 1, title: 'Visita #01', content: 'Cliente' },
    { id: 2, title: 'Visita #02', content: 'Cliente, Status' },
    { id: 3, title: 'Visita #03', content: 'Cliente, Tamanho' },
    { id: 4, title: 'Visita #04', content: 'Cliente' },
    { id: 5, title: 'Visita #05', content: 'Cliente, Tamanho' },
    { id: 6, title: 'Visita #06', content: 'Cliente' },
    { id: 7, title: 'Visita #07', content: 'Cliente, Tamanho' },
    { id: 8, title: 'Visita #08', content: 'Cliente' },
    { id: 9, title: 'Visita #09', content: 'Cliente, Tamanho' },
  ])

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenVisitRegistration() {
    navigation.navigate('visitRegistration')
  }

  function handleOpenDayPlanning() {
    navigation.navigate('dayPlanning')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack p={8}>
        <NavButton
          title="registro da visita"
          w={40}
          onPress={handleOpenVisitRegistration}
        />
        <NavButton
          title="planejamento do dia"
          w={40}
          onPress={handleOpenDayPlanning}
        />
      </HStack>
      <VStack flex={1} px={8} mt={4}>
        <HStack justifyContent="space-between">
          <Heading color="gray.200" fontSize="md" mb={4}>
            Pendentes
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {pendencies.length}
          </Text>
        </HStack>
        <FlatList
          data={pendencies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PendencyCard title={item.title} content={item.content} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
          contentContainerStyle={
            pendencies.length === 0 && { flex: 1, justifyContent: 'center' }
          }
          ListEmptyComponent={() => (
            <EmptyList title="Não há cadastros pendentes" />
          )}
        />
      </VStack>
    </VStack>
  )
}
