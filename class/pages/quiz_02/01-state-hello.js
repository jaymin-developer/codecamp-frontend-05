import {useState} from 'react'

export default function StateHello() {
    
    const [ qqq, setQqq ] = useState("안녕하세요")

    function zzz(){
        setQqq("반갑습니다")
    }

    return (        
        <div>
            <button onClick={zzz}>{qqq}</button>
        </div>
    )

}

// let, const -> html로 연결