// Native
import { useState } from 'react'
import { useTheme } from 'native-base'
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
  const { colors } = useTheme()
  const [markedDates, setMarkedDates] = useState<{ [date: string]: any }>({})

  const handleDayPress = (day: { dateString: string }) => {
    const { dateString } = day
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
        backgroundColor: colors.gray[600],
        calendarBackground: colors.gray[600],
        textSectionTitleColor: colors.gray[300],
        textSectionTitleDisabledColor: colors.gray[400],
        selectedDayBackgroundColor: colors.green[700],
        selectedDayTextColor: colors.gray[100],
        todayTextColor: colors.green[500],
        dayTextColor: colors.gray[100],
        textDisabledColor: colors.gray[400],
        selectedDotColor: colors.white,
        arrowColor: colors.green[700],
        disabledArrowColor: colors.gray[400],
        monthTextColor: colors.gray[100],
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textMonthFontSize: 16,
      }}
    />
  )
}
