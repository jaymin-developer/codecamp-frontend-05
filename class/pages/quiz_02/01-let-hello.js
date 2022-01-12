export default function LetHello() {
    

    function zzz(){
        document.getElementById("qqq").innerText = "반갑습니다"
    }

    return (
        <div>
            <button id="qqq" onClick={zzz}>안녕하세요</button>
        </div>
    )

}

// let, const -> html로 연결 X