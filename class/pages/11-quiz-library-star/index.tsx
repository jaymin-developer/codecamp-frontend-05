import { Rate} from "antd"
import { useState } from "react"
import styled  from "@emotion/styled"

const Star = styled.div``
const RatePoint = styled.div``

export default function LibraryRatePage(){
    const [value, setValue] = useState(3)

    const handleChange = (value) => {
        setValue(value)
        alert(`${value}점`)
    }

    return (
        <Star>
            <Rate onChange={handleChange} value={value}/>
            <RatePoint>{value}점</RatePoint>
        </Star>
    )}
