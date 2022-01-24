import { Rate} from "antd"
import { useState } from "react"


export default function LibraryRatePage(){
    const [value, setValue] = useState(3)

    console.log(value)

    const handleChange = (value) => {
        setValue(value)
    }

    

    return (
        <Rate onChange={handleChange} value={value}/>
    )}
