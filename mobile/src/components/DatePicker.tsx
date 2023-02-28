// Native
import { Text, VStack } from 'native-base'
import { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
}
LocaleConfig.defaultLocale = 'pt-br'

export function DatePicker() {
  const [markedDates, setMarkedDates] = useState({})

  const handleDayPress = (day) => {
    const { dateString } = day
    console.log(dateString)
    setMarkedDates({
      [dateString]: { selected: true, selectedColor: '#008943' },
    })
  }

  return (
    <Calendar
      markedDates={markedDates}
      onDayPress={handleDayPress}
      locale="pt-br"
      style={{
        borderRadius: 10,
      }}
      theme={{
        backgroundColor: '#202024',
        calendarBackground: '#202024',
        textSectionTitleColor: '#7C7C8A',
        textSectionTitleDisabledColor: '#323238',
        selectedDayBackgroundColor: '#008943',
        selectedDayTextColor: '#E1E1E6',
        todayTextColor: '#00E36E',
        dayTextColor: '#E1E1E6',
        textDisabledColor: '#323238',
        selectedDotColor: '#ffffff',
        arrowColor: '#008943',
        disabledArrowColor: '#323238',
        monthTextColor: '#E1E1E6',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textMonthFontSize: 16,
      }}
    />
  )
}
