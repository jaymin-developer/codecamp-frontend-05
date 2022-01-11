export default function LetCount(){

    let count = 0

    function zzz(){
        count = count + 1
        document.getElementById("aaa").innerText = count
    }

    return (
        <div>
            <div id="aaa">{count}</div>
            <button onClick={zzz}>카운트 증가!!</button>
        </div>
    )

}