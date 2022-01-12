export default function LetNum(){

    const number = Math.random()
    const token = Math.floor(number * 1000000)
    const paddedToken = String(token).padStart(6, "0")

    function zzz(){
        document.getElementById("aaa").innerText = paddedToken
    }

    return (
        <div>
            <div id="aaa">0</div>
            <button onClick={zzz}>인증번호전송</button>
        </div>
    )

}