import { Calendar, toDateId, useDateRange } from "@marceloterreiro/flash-calendar";
import { View, Text } from "react-native";
import * as React from "react";

type CalendarProps = {
  selectedDateDefault?: string;
};

const today = toDateId(new Date());

export const CalendarUI = ({ selectedDateDefault = today }: CalendarProps) => {
  const [selectedDate, setSelectDate] = React.useState(selectedDateDefault);
  return (
    <View
      style={{
        marginTop: 40,
      }}
    >
      <Calendar
        calendarActiveDateRanges={[
          {
            startId: selectedDate,
            endId: selectedDate,
          },
        ]}
        calendarMonthId={today}
        onCalendarDayPress={setSelectDate}
      />
    </View>
  );
};


export const CalendarUIList =({ selectedDateDefault = today }: CalendarProps)=>{
   const [selectedDate, setSelectDate] = React.useState(selectedDateDefault);
  return(
    <View style={{
      flex: 1
    }}>
      

      <Calendar.List
      calendarActiveDateRanges={[
        {
          startId: selectedDate ,
          endId: selectedDate
        }
      ]}
      calendarInitialMonthId={today}
      onCalendarDayPress={setSelectDate}
      //  estimatedItemSize={400}
      />

    </View>
  )
}


export const CalendarDateRangePick = () =>{
  const {calendarActiveDateRanges , onCalendarDayPress} = useDateRange();
  return(
    <Calendar.List

    calendarActiveDateRanges={calendarActiveDateRanges}
    onCalendarDayPress={onCalendarDayPress}
    />
  )
}