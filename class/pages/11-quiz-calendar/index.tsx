import { useState } from "react"
import { Calendar } from 'antd';
import styled  from "@emotion/styled"
import { getMonth, getMyDate } from "../../src/commons/libraries/utils"


const CalendarPage = styled.div`
width: 500px;
`
const Date = styled.div`
font-size: 20px;
`

const Month = styled.div`
font-size: 20px;
`

export default function LibraryRatePage(){
    const [value, setValue] = useState('2022-01-24')

    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
      }

    function onSelect(value, mode){
        setValue(value), mode;
        console.log(getMyDate(value))

    }


    return (
        <CalendarPage>
            <Calendar onSelect={onSelect} onPanelChange={onPanelChange}></Calendar>
            <Date>{getMyDate(value)}</Date>
            <Month>{getMonth(value)}월</Month>
        </CalendarPage>
    )}
    // onChange={value}