import { useState } from "react"
import { Calendar, DatePicker, } from 'antd';
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
    const [value, setValue] = useState("")
    
    function onChange(event){
        setValue(event._d)
        console.log(event._d)
    }


    return (
        <CalendarPage>
            <DatePicker onChange={onChange} />
            <Date>{!value ? "날짜를 선택해주세요" : getMyDate(value)}</Date>
            <Month>{!value ? "" : `${getMonth(value)}월`}</Month>
        </CalendarPage>
    )}
    // onChange={value}