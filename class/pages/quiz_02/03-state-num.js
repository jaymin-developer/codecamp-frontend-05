import { useState } from 'react'

export default function LetCount(){

    const [ number, setNumber ] = useState(0)

    function zzz(){
        setNumber(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={zzz}>인증번호전송</button>
        </div>
    )

}